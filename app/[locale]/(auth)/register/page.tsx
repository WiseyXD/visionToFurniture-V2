import AuthForm from '@/components/auth/AuthForm';
import { useLocale, useTranslations } from 'next-intl';
export default function Page() {
    const t = useTranslations('signup');
    const activeLocal = useLocale();
    return (
        <AuthForm
            label={t('label1')}
            labelText={t('labelText1')}
            backButtonHref={`/${activeLocal}/login`}
            backButtonText={t('backButtonText1')}
            backButtonLabel={t('backButtonLabel1')}
            submitButton={t('submitButton1')}
            formType="register"
        />
    );
}
