'use client';

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
import { z } from 'zod';

import { resetPassword } from '@/actions/resetPassword';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { resetPasswordSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

export default function ForgotPasswordForm({ email }: { email: string }) {
    const t = useTranslations('forget');
    const router = useRouter();

    const [isPending, startTransisiton] = useTransition();
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');

    useEffect(() => {
        if (success == 'Password successfully changed.') {
            router.push('/');
        }
    }, [success]);

    const formSchema = resetPasswordSchema;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: email,
            reEnterPassword: '',
            password: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setSuccess('');
        setError('');

        startTransisiton(async () => {
            const resp = await resetPassword(values.email, values.password);
            setError(resp.error);
            setSuccess(resp.success);
        });

        form.reset();
    }
    return (
        <div className="w-full lg:grid min-h-[93vh] ">
            <div className="flex flex-col items-center justify-center py-12">
                <div className="flex flex-col px-8 py-10 rounded-xl border ">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mx-auto grid w-[350px] gap-6 "
                        >
                            <div className="grid gap-2 text-center">
                                <h1 className="text-3xl font-bold">
                                    {t('resetPassword')}
                                </h1>
                                <p className="text-balance text-muted-foreground">
                                    {t('re')}
                                </p>
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="*****"
                                                {...field}
                                                disabled
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            {t('res')}
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
                                                placeholder="*****"
                                                {...field}
                                                disabled={isPending}
                                                type="password"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            {t('res')}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="reEnterPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('ree')}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="******"
                                                {...field}
                                                disabled={isPending}
                                                type="password"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            {t('ma')}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormError message={error} />
                            <FormSuccess message={success} />

                            <Button type="submit" disabled={isPending}>
                                {t('su')}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
