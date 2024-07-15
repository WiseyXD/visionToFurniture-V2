'use client';
import { useSession } from '@/providers/SessionProvider';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Button as NextButton,
} from '@nextui-org/react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { AcmeLogo } from './AcmeLogo';
import LocaleToggle from './locale-toggle';
import { ModeToggle } from './mode-toggle';

export default function NewNavbar() {
    const sessionData = useSession();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const activeLocal = useLocale();

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
                        <p className="font-bold text-inherit">Vision</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>
            {sessionData.session ? (
                <>
                    <NavbarContent
                        className="hidden sm:flex gap-4"
                        justify="center"
                    >
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Features
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="#" aria-current="page">
                                Customers
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Integrations
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                <ModeToggle />
                            </Link>
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarMenu>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2
                                            ? 'primary'
                                            : index === menuItems.length - 1
                                              ? 'danger'
                                              : 'foreground'
                                    }
                                    className="w-full"
                                    href="#"
                                >
                                    {item}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </>
            ) : (
                <NavbarContent justify="end">
                    <NavbarItem>
                        <LocaleToggle />
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Link href={`/${activeLocal}/login`}>Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <NextButton
                            as={Link}
                            color="primary"
                            href={`/${activeLocal}/register`}
                            variant="flat"
                        >
                            Sign Up
                        </NextButton>
                    </NavbarItem>
                </NavbarContent>
            )}
        </Navbar>
    );
}
