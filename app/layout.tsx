import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import ThemeProvider from '@/providers/ThemeProvider/ThemeProvider';
import { Theme } from '@/providers/ThemeProvider';

// const geistSans = Geist({
//     variable: '--font-geist-sans',
//     subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//     variable: '--font-geist-mono',
//     subsets: ['latin'],
// });

export const metadata: Metadata = {
    title: `Sergey's homepage`,
    description: `Hi! I'm Sergey. Here is my personal page`,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme')?.value;

    return (
        <html lang="en" data-theme={theme || 'system'}>
            <ThemeProvider storedTheme={theme as Theme}>
                <body>
                    {children}
                    <footer>© Given Existence | 2025</footer>
                </body>
            </ThemeProvider>
        </html>
    );
}
