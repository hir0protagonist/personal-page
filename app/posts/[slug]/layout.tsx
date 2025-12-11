import Link from 'next/link';
import styles from './layout.module.css';
import Header from '@/components/Header/Header';

export default function BlogPostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className={styles.blog}>
            <Header />
            <Link href={'/posts'}>Back to posts</Link>
            <article>{children}</article>
        </section>
    );
}
