'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import clsx from 'clsx';
import styles from './LanguageSelect.module.css';
import { PostLanguage } from '../../types';

type Lang = 'ru' | 'en';

type LanguageSelectProps = {
    lang: Lang;
};

export default function LanguageSelect({ lang }: LanguageSelectProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isEn = lang === 'en';
    const isRu = lang === 'ru';

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    const handleSwitch = (lang: PostLanguage) => {
        router.push(pathname + '?' + createQueryString('lang', lang));
    };

    return (
        <div className={styles.toggle}>
            <button
                disabled={isEn}
                className={clsx({ [styles.selected]: isEn })}
                onClick={() => handleSwitch('en')}>
                EN
            </button>
            |
            <button
                disabled={isRu}
                className={clsx({ [styles.selected]: isRu })}
                onClick={() => handleSwitch('ru')}>
                RU
            </button>
        </div>
    );
}
