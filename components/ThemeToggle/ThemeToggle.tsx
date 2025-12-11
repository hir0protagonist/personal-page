'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/providers/ThemeProvider';
import MoonIcon from './components/MoonIcon';
import SunIcon from './components/SunIcon';
import SystemIcon from './components/SystemIcon';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);
    const isDark = theme === 'dark';
    const isLight = theme === 'light';
    const nextTheme = isLight ? 'dark' : isDark ? 'system' : 'light';

    return (
        <button className={styles.toggle} onClick={() => setTheme(nextTheme)}>
            {!isDark && !isLight && <SystemIcon />}
            {isLight && <SunIcon />}
            {isDark && <MoonIcon />}
        </button>
    );
}
