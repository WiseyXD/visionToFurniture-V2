'use client';
import { useSession } from '@/providers/SessionProvider';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    Button as NextButton,
} from '@nextui-org/react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { AcmeLogo } from './AcmeLogo';
import LocaleToggle from './locale-toggle';

export default function NewNavbar() {
    const t = useTranslations('nav');

    const { session } = useSession();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const activeLocal = useLocale();

    if (session) return;

    const menuItems = [
        'Profile',
        'Dashboard',
        'Activity',
        'Analytics',
        'System',
        'Deployments',
        'My Settings',
        'Team Settings',
        'Help & Feedback',
        'Log Out',
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBordered position="static">
            <NavbarContent className="w-full px-3">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className="sm:hidden"
                />
                <Link href={'/'} className="cursor-pointer">
                    <NavbarBrand>
                        <AcmeLogo />
                        <p className="font-bold text-inherit">{t('vision')}</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <LocaleToggle />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href={`/${activeLocal}/login`}>{t('login')}</Link>
                </NavbarItem>
                <NavbarItem>
                    <NextButton
                        as={Link}
                        color="primary"
                        href={`/${activeLocal}/register`}
                        variant="flat"
                    >
                        {t('signUp')}
                    </NextButton>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
