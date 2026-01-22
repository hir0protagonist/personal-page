import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Script from 'next/script';
import ThemeProvider from '@/lib/providers/theme/ThemeProvider';
import { Theme } from '@/lib/providers/theme/types';
import { THEME_COOKIE_NAME } from '@/lib/constants/cookie';
import './globals.css';

export const metadata: Metadata = {
    title: 'Given Existence',
    description: `Hi! My Name is Sergey. This is my personal page.`,
    robots: 'noindex',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = (await cookies()).get(THEME_COOKIE_NAME)?.value as Theme;

    return (
        <html lang='en' data-theme={theme || 'dark'}>
            <Script id='set-js-enable'>
                {`document.documentElement.dataset['javascript'] = true`}
            </Script>
            <body>
                <ThemeProvider storedTheme={theme}>
                    <main id='main'>{children}</main>
                    <footer>© Given Existence | {new Date().getFullYear()}</footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
