import Header from '@/components/Header/Header';
import { promises as fs } from 'fs';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default async function Posts() {
    const posts = JSON.parse(await fs.readFile(process.cwd() + `/posts/meta.json`, 'utf8'))[
        'posts'
    ];

    return (
        <div>
            <Header title="Sergey's posts" />
            <section className={styles.page}>
                <Link href="/">Back home</Link>
                <section className={styles.posts}>
                    {Object.keys(posts).map((key) => (
                        <Link key={key} href={`/posts/${key}`}>
                            <article className={styles.post}>
                                <main>
                                    <div className={styles.info}>
                                        <h2>{posts[key]['title']}</h2>
                                        <p>{posts[key]['preview']['text']}</p>
                                    </div>
                                    <Image
                                        alt={posts[key]['preview']['image']['alt']}
                                        src={`/${posts[key]['preview']['image']['path']}`}
                                        width={posts[key]['preview']['image']['width']}
                                        height={posts[key]['preview']['image']['height']}
                                    />
                                </main>
                                <footer>[{new Date(posts[key]['publishedAt']).toLocaleDateString()}]</footer>
                            </article>
                        </Link>
                    ))}
                </section>
            </section>
        </div>
    );
}
