import { createContext, useContext } from 'react';
import { THEME, Theme } from './types';

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: THEME.SYSTEM,
    setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
