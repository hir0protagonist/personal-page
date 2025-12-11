import Greeting from '../components/Greeting/Greeting';
import Header from '../components/Header/Header';
import styles from './page.module.css';

export default function Home() {
    return (
        <section className={styles.page}>
            <Header title="Sergey's personal page" />
            <main>
                <section className={styles.greeting}>
                    <Greeting></Greeting>
                </section>
            </main>
        </section>
    );
}
