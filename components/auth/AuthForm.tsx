'use client';
import { useEffect, useState, useTransition } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useCountdown } from 'usehooks-ts';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';

import { login } from '@/actions/login';
import { register } from '@/actions/register';
import { resendEmailVerificationLink } from '@/actions/resendEmail';
import { sendLinkInMail } from '@/actions/resetPassword';
import { loginSchema, signupSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

export interface IAuthFormProps {
    label: string;
    labelText: string;
    backButtonText: string;
    backButtonHref: string;
    backButtonLabel: string;
    submitButton: string;
    formType: 'login' | 'register';
}

export default function AuthForm({
    label,
    labelText,
    backButtonText,
    backButtonHref,
    backButtonLabel,
    submitButton,
    formType,
}: IAuthFormProps) {
    const t = useTranslations('authForm');

    const router = useRouter();
    const isRegister = formType === 'register' ? true : false;
    const [oneTimError, setOneTimeError] = useState(false);
    const [verificationCounter, setVerificationCounter] = useState<number>(0);
    const [isPending, startTransisiton] = useTransition();
    const [resendVerificationEmail, setResendVerificationEmail] =
        useState(false);
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');

    const [count, { startCountdown, stopCountdown, resetCountdown }] =
        useCountdown({
            countStart: 60,
            intervalMs: 1000,
        });

    const formSchema = isRegister ? signupSchema : loginSchema;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        if (error == 'Please verify your email') {
            setResendVerificationEmail(true);
        }
        if (success == 'Email Sent') {
            startCountdown();
        }
    }, [error, success]);

    useEffect(() => {
        if (count == 0) {
            resetCountdown();
        }
    }, [count]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setSuccess('');
        setError('');

        startTransisiton(async () => {
            isRegister
                ? await register(values).then(async (data) => {
                      setError(data.error);
                      setSuccess(data.success);
                  })
                : await login(values).then((data) => {
                      setError(data.error);
                      setSuccess(data.success);
                  });
        });

        if (success == 'Logging in') {
            router.push('/homePage');
        }
    }

    async function onResendEmail() {
        if (verificationCounter >= 3) {
            setError('Check Spam Folder');
            return;
        }
        setError('');
        setSuccess('');
        const data = await resendEmailVerificationLink(form.getValues('email'));

        setVerificationCounter((prev) => prev + 1);
        setSuccess(data.success);
        setError(data.error);
    }

    return (
        // <div className="w-full lg:grid min-h-screen">
        <div className="w-full lg:grid min-h-[93vh] ">
            <div className="flex flex-col items-center justify-center py-12">
                <div className="flex flex-col px-8 py-10 rounded-xl border ">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mx-auto grid w-[350px] gap-6 "
                        >
                            <div className="grid gap-2 text-center">
                                <h1 className="text-3xl font-bold">{label}</h1>
                                <p className="text-balance text-muted-foreground">
                                    {labelText}
                                </p>
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('email')}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="shadcn"
                                                {...field}
                                                disabled={isPending}
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            {t('emailDescription')}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('password')}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="******"
                                                {...field}
                                                disabled={isPending}
                                                type="password"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            {t('passwordDescription')}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {!isRegister && error && (
                                <div className="text-sm flex gap-1 justify-start">
                                    <button
                                        className="underline text-blue-500"
                                        onClick={async () => {
                                            const resp = await sendLinkInMail(
                                                form.getValues().email
                                            );
                                            setSuccess(resp.success);
                                            setError(resp.error);
                                        }}
                                        type="button"
                                    >
                                        {t('forgotPassword')}
                                    </button>
                                </div>
                            )}
                            <FormError message={error} />
                            <FormSuccess message={success} />

                            <Button type="submit" disabled={isPending}>
                                {submitButton}
                            </Button>
                        </form>
                        {resendVerificationEmail && (
                            <div className="flex gap-3">
                                <Button
                                    variant={'link'}
                                    onClick={onResendEmail}
                                    disabled={count < 60 && count > 0}
                                >
                                    {t('resendVerificationEmail')}
                                </Button>
                                {count}
                            </div>
                        )}
                        <div className="mt-4 text-sm flex gap-1 justify-center">
                            {backButtonLabel}
                            <Link
                                href={backButtonHref}
                                className="underline text-blue-500"
                            >
                                {backButtonText}
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
