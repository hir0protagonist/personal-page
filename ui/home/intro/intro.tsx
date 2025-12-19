import Link from 'next/link';
import Button from '@/ui/shared/button/button';
import styles from './intro.module.css';

export default function Intro() {
    return (
        <div className={styles.greeting}>
            <article>
                Welcome to my personal corner of the Internet — a place I never really expected
                anyone to visit, including myself. I’m not entirely sure what this page is supposed
                to be, but here it is, existing anyway. If you’ve stumbled in, please don’t take
                anything too seriously; I certainly didn’t when I made it. Think of this as a
                digital lost-and-found box, except I’m the one who’s lost, and I’m not sure what was
                meant to be found. Enjoy the confusion. I do.
            </article>
            <section>
                <Link href="/posts">
                    <Button text="Open the box"></Button>
                </Link>
            </section>
        </div>
    );
}
