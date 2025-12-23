import { ViewTransition } from 'react';
import ThemeToggle from '@/ui/components/ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

type HeaderProps = {
    title?: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <header className={styles.header}>
            <section className={styles.navigation}>
                <ViewTransition name="title">{title && <h1>{title}</h1>}</ViewTransition>
            </section>
            <ViewTransition name="theme">
                <ThemeToggle />
            </ViewTransition>
        </header>
    );
}
