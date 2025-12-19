import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Script from 'next/script';
import ThemeProvider from '@/lib/providers/theme/theme-provider';
import { Theme } from '@/lib/providers/theme/types';
import { THEME_COOKIE_NAME } from '@/lib/constants/cookie';
import './globals.css';

export const metadata: Metadata = {
    title: 'Given Existence',
    description: `Hi! I'm Sergey. This is my personal page.`,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const theme = cookieStore.get(THEME_COOKIE_NAME)?.value as Theme;

    return (
        <html lang="en" data-theme={theme || 'system'}>
            <Script id="set-js-enable">
                {`document.documentElement.dataset['javascript'] = true`}
            </Script>
            <body>
                <ThemeProvider storedTheme={theme}>
                    <main>{children}</main>
                </ThemeProvider>
                <footer>© Given Existence | 2025</footer>
            </body>
        </html>
    );
}
