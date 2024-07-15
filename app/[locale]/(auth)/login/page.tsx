import AuthForm from '@/components/auth/AuthForm';
import { useLocale, useTranslations } from 'next-intl';

export default function Page() {
    const t = useTranslations('login');
    const activeLocal = useLocale();
    return (
        <AuthForm
            label="Login"
            labelText="Enter your email below to Login on Vision to Furniture"
            backButtonHref={`/${activeLocal}/register`}
            backButtonText="Register"
            backButtonLabel="Don't have an account ?"
            submitButton="Login"
            formType="login"
        />
    );
}
