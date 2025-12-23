import Link from 'next/link';
import Header from '@/ui/layout/Header/Header';
import styles from './layout.module.css';

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.blog}>
            <Header />
            <section className={styles.back}>
                <Link href={'/posts'}>Back to posts</Link>
            </section>
            {children}
        </div>
    );
}
