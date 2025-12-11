import Image from 'next/image';
import styles from './Projects.module.css';
import Link from 'next/link';

export default function Projects() {
    return (
        <section className={styles.projects}>
            <article className={styles.project}>
                <h2>Terminal</h2>
                <div className={styles['project-link']}>
                    <Link href="/">
                        <Image alt="Perconal Computer" src="/pc.png" width={300} height={200} />{' '}
                    </Link>
                </div>
            </article>
            <article className={styles.project}>
                <h2>Metronom</h2>
                <div className={styles['project-link']}>
                    <Link href="/">
                        <Image alt="Metronom" src="/metronom.png" width={150} height={300} />
                    </Link>
                </div>
            </article>
        </section>
    );
}
