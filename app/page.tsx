import Header from '@/ui/components/Header/Header';
import { Intro } from '@/ui/components';
import styles from './page.module.css';

export default function HomePage() {
    return (
        <>
            <Header title="Sergey's homepage"/>
            <div className={styles.content}>
                <Intro></Intro>
            </div>
        </>
    );
}
