import { createContext, useContext } from 'react';

export type Theme = 'system' | 'dark' | 'light';
type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'system',
    setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
