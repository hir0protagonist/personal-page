import { ViewTransition } from 'react';
import ThemeToggle from '@/ui/components/ThemeToggle/ThemeToggle';
import styles from './Header.module.css';
import Link from 'next/link';
import clsx from 'clsx';

type HeadLink = {
    href: string;
    title: string;
    active?: boolean;
};

type HeaderProps = {
    title?: string;
    links?: HeadLink[];
};

export default function Header({ title, links = [] }: HeaderProps) {
    const isEmpty = !title && !links.length;

    return (
        <header className={clsx([styles.header, isEmpty && styles['header_empty']])}>
            {!isEmpty && (
                <nav className={styles.nav}>
                    <ViewTransition name='title'>
                        {title && (
                            <h1 className={clsx(styles['nav-item'], styles['nav-item_active'])}>
                                {title}
                            </h1>
                        )}
                    </ViewTransition>
                    {!!links.length &&
                        links.map(({ href, title, active }, i) => (
                            <ViewTransition key={href} name={`nav-${i}`}>
                                <Link
                                    key={href}
                                    href={href}
                                    className={clsx(
                                        styles['nav-item'],
                                        active && styles['nav-item_active']
                                    )}>
                                    {title}
                                </Link>
                            </ViewTransition>
                        ))}
                </nav>
            )}
            <ViewTransition name='theme'>
                <ThemeToggle />
            </ViewTransition>
        </header>
    );
}
