'use client';

import { useContext } from 'react';
import styles from './theme-toggle.module.css';
import { SystemIcon, SunIcon, MoonIcon } from './icons';
import { ThemeContext } from '@/lib/providers/theme/theme-context';

export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);
    const isDark = theme === 'dark';
    const isLight = theme === 'light';
    const nextTheme = isLight ? 'dark' : isDark ? 'system' : 'light';

    return (
        <div className="d-js-required">
            <button
                aria-label="Theme Toggle"
                className={styles.toggle}
                onClick={() => setTheme(nextTheme)}>
                {!isDark && !isLight && <SystemIcon />}
                {isLight && <SunIcon />}
                {isDark && <MoonIcon />}
            </button>
        </div>
    );
}
