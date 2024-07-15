import AuthForm from '@/components/auth/AuthForm';
export default function page() {
    return (
        <AuthForm
            label="Register"
            labelText="Enter your email below to register on SCOE-Mask"
            backButtonHref="/login"
            backButtonText="Login"
            backButtonLabel=" Already have an account ?"
            submitButton="Register"
            formType="register"
        />
    );
}
