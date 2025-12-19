import { ViewTransition } from 'react';
import styles from './page.module.css';
import Header from '@/ui/layout/header/header';
import Intro from '@/ui/home/intro/intro';

export default function Home() {
    return (
        <ViewTransition>
            <Header title="Sergey's homepage" />
            <div className={styles.content}>
                <Intro></Intro>
            </div>
        </ViewTransition>
    );
}
