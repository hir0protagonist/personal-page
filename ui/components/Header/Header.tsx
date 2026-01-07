import { ViewTransition } from 'react';
import ThemeToggle from '@/ui/components/ThemeToggle/ThemeToggle';
import styles from './Header.module.css';
import Link from 'next/link';

type HeadLink = {
    href: string;
    title: string;
};

type HeaderProps = {
    title?: string;
    links?: HeadLink[];
};

export default function Header({ title, links = [] }: HeaderProps) {
    return (
        <header className={styles.header}>
            <section className={styles.navigation}>
                <ViewTransition name='title'>{title && <h1>{title}</h1>}</ViewTransition>
                {!!links.length && (
                    <nav>
                        <ul>
                            {links.map(({ href, title }) => (
                                <li key={href}>
                                    <Link href={href}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </section>
            <ViewTransition name='theme'>
                <ThemeToggle />
            </ViewTransition>
        </header>
    );
}
