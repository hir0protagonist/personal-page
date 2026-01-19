import Header from '@/ui/components/Header/Header';
import styles from './layout.module.css';

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.blog}>
            <Header />
            {children}
        </div>
    );
}
