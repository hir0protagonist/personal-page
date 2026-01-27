'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/lib/providers/theme/ThemeContext';
import styles from './ThemeToggle.module.css';
import { SystemIcon, SunIcon, MoonIcon } from './icons';
import clsx from 'clsx';

export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);
    const isDark = theme === 'dark';
    const isLight = theme === 'light';
    const nextTheme = isLight ? 'dark' : isDark ? 'system' : 'light';

    return (
        <div className={clsx('d-js-required"', styles.wrapper)}>
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
