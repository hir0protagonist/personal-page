import { ObjectValues } from '@/lib/utils/typeUtils';

export const THEME = {
    SYSTEM: 'system',
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export type Theme = ObjectValues<typeof THEME>;
