import { ViewTransition } from 'react';
import Header from '../ui/layout/Header/Header';
import { Intro } from '../ui/components';
import styles from './page.module.css';

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
