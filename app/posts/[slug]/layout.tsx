import Header from '@/ui/components/Header/Header';
import styles from './layout.module.css';

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header
                title=''
                links={[
                    { href: '/', title: 'About' },
                    { title: 'Posts', href: '/posts' },
                ]}
            />
            <div className={styles.blog}>{children}</div>
        </>
    );
}
