import { validateRequest } from '@/actions/validateRequests';
import { getLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

export interface IBaseTemplate {
    children: React.ReactNode;
}

export default async function BaseTemplate({ children }: IBaseTemplate) {
    const { session } = await validateRequest();
    const activeLocale = await getLocale();
    if (!session) redirect(`/${activeLocale}/login`);
    return <div>{children}</div>;
}
