import Link from 'next/link';
import Header from '@/ui/layout/header/header';
import styles from './layout.module.css';

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
