'use client';

import { useEffect, useState } from 'react';
import { Theme, ThemeContext } from './';

export default function ThemeProvider({
    storedTheme,
    children,
}: {
    storedTheme?: Theme;
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<Theme>(storedTheme || 'system');

    useEffect(() => {
        const shouldStore = theme !== 'system' || storedTheme;
        if (shouldStore) cookieStore.set('theme', theme);
        document.documentElement.dataset.theme = theme;
    }, [theme, storedTheme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
