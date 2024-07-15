import { validateRequest } from '@/actions/validateRequests';
import NewNavbar from '@/components/Navabar';
import { Toaster } from '@/components/ui/toaster';
import { SessionProvider } from '@/providers/SessionProvider';
import { ThemeProvider } from '@/providers/theme-provider';
import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'VisionToFurniture',
    description: 'Developed by WiseyXD',
};

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const sessionData = await validateRequest();
    const messages = await getMessages();
    return (
        <html lang="en">
            <body className={inter.className}>
                <SessionProvider value={sessionData}>
                    <NextIntlClientProvider messages={messages}>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                        >
                            <NextUIProvider>
                                <NewNavbar />
                                {children}

                                <Toaster />
                            </NextUIProvider>
                        </ThemeProvider>
                    </NextIntlClientProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
