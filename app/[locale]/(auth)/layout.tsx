import { validateRequest } from '@/actions/validateRequests';
import { getLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

export interface IBaseTemplate {
    children: React.ReactNode;
}

export default async function BaseTemplate({ children }: IBaseTemplate) {
    const { user } = await validateRequest();
    const activeLocale = await getLocale();
    if (user) redirect(`/${activeLocale}/homePage`);
    return <div>{children}</div>;
}
