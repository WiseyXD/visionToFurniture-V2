import AuthForm from '@/components/auth/AuthForm';
import { useLocale, useTranslations } from 'next-intl';

export default function Page() {
    const t = useTranslations('loginpage');
    const activeLocal = useLocale();
    return (
        <AuthForm
            label={t('label')}
            labelText={t('labelText')}
            backButtonHref={`/${activeLocal}/register`}
            backButtonText={t('backButtonText')}
            backButtonLabel={t('backButtonLabel')}
            submitButton={t('submitButton')}
            formType="login"
        />
    );
}
