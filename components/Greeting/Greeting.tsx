import Link from 'next/link';
import Image from 'next/image';
import styles from './Greeting.module.css';

export default function Greeting() {
    return (
        <section className={styles.greeting}>
            <article>
                Welcome to my personal corner of the Internet — a place I never actually expected
                anyone to visit, including myself. Honestly, I’m not entirely sure what this page is
                supposed to be, but here it is, existing anyway. If you’ve stumbled in, please don’t
                take anything too seriously; I certainly didn’t when I made it. Think of this as a
                digital lost-and-found box, except I’m the one who’s lost… and I’m not sure what was
                supposed to be found. Enjoy the confusion — I sure am.
            </article>
            <section>
                <Link href="/posts">
                    <p>Open the box</p>
                    <Image alt="Lost & Found Box" src="/box.png" width={125} height={200} />
                </Link>
            </section>
        </section>
    );
}
