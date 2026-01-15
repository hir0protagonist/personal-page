import { ObjectValues } from '@/lib/utils/typeUtils';

export const THEME = {
    SYSTEM: 'system',
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export const DEFAULT_THEME = THEME.DARK;

export type Theme = ObjectValues<typeof THEME>;
