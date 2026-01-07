'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './TableOfContent.module.css';
import { PostLanguage, PostTOCItem } from '../../types';

type TableOfContnetProps = {
    items: PostTOCItem[];
    lang: PostLanguage;
};

export default function TableOfContnet({ items = [], lang }: TableOfContnetProps) {
    const [activeId, setActiveId] = useState<string | null>(null);

    const displayItems = useMemo(() => {
        return items.filter(({ text }) => typeof text !== 'object' || !!text[lang]);
    }, [items, lang]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            {
                // rootMargin: '-40% 0px -50% 0px',
                // rootMargin: '0px 0px -10% 0px',
                threshold: 0,
            }
        );

        displayItems.forEach((h) => {
            const el = document.getElementById(h.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [displayItems]);

    return (
        <section className={styles.toc}>
            <ul>
                {displayItems.map((item) => (
                    <li
                        key={item.id}
                        className={activeId === item.id ? styles.active : ''}
                        onClick={() => {
                            document
                                .getElementById(item.id)
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                        {typeof item.text === 'object' ? item.text[lang] : item.text}
                    </li>
                ))}
            </ul>
        </section>
    );
}
