import { createContext, useContext } from 'react';
import { DEFAULT_THEME, Theme } from './types';

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: DEFAULT_THEME,
    setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
