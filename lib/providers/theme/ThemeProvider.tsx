'use client';

import { useEffect, useState } from 'react';
import { THEME_COOKIE_NAME } from '@/lib/constants/cookie';
import { DEFAULT_THEME, THEME, Theme } from './types';
import { ThemeContext } from './ThemeContext';

export default function ThemeProvider({
    storedTheme,
    children,
}: {
    storedTheme?: Theme;
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<Theme>(storedTheme || DEFAULT_THEME);

    useEffect(() => {
        const shouldStore = theme !== DEFAULT_THEME || storedTheme;
        if (shouldStore) cookieStore.set(THEME_COOKIE_NAME, theme);
        document.documentElement.dataset.theme = theme;
    }, [theme, storedTheme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
