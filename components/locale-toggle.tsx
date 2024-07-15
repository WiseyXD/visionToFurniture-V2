'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LocaleToggle() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const pathname = usePathname();

    const onSelectChange = (e: string) => {
        const nextLocale = e;
        if (pathname) {
            const newPathname = `/${nextLocale}${pathname.replace(/^\/[^/]+/, '')}`;

            startTransition(() => {
                router.replace(newPathname);
            });
        } else {
            console.error('pathname is undefined');
        }
    };
    return (
        <Select
            onValueChange={(e) => onSelectChange(e)}
            disabled={isPending}
            defaultValue={localActive}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue
                    placeholder={localActive == 'en' ? 'English' : 'Russian'}
                />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ru">Russian</SelectItem>
            </SelectContent>
        </Select>
    );
}
