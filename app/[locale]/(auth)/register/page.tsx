import AuthForm from '@/components/auth/AuthForm';
import { useLocale } from 'next-intl';
export default function Page() {
    const activeLocal = useLocale();
    return (
        <AuthForm
            label="Register"
            labelText="Enter your email below to register on Vision to Furniture"
            backButtonHref={`/${activeLocal}/login`}
            backButtonText="Login"
            backButtonLabel=" Already have an account ?"
            submitButton="Register"
            formType="register"
        />
    );
}
