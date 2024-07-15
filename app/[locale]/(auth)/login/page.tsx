import AuthForm from '@/components/auth/AuthForm';
import { useTranslations } from 'next-intl';

export default function Page() {
    const t = useTranslations('HomePage');

    return (
        <AuthForm
            label="Login"
            labelText="Enter your email below to Login on SCOE-Mask"
            backButtonHref="/register"
            backButtonText="Register"
            backButtonLabel="Don't have an account ?"
            submitButton="Login"
            formType="login"
        />
    );
}
