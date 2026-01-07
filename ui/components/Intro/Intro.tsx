import styles from './Intro.module.css';
import Button from '../Button/Button';

export function Intro() {
    return (
        <article className={styles.intro}>
            <p>
                Welcome to my personal corner of the Internet — a place I never really expected
                anyone to visit, including myself. I’m not entirely sure what this page is supposed
                to be, but here it is, existing anyway. If you’ve stumbled in, please don’t take
                anything too seriously; I certainly didn’t when I made it. Think of this as a
                digital lost-and-found box, except I’m the one who’s lost, and I’m not sure what was
                meant to be found. Enjoy the confusion. I do.
            </p>
            <footer>
                <Button as='link' href='/posts' variant='ghost' size='md'>
                    Got it!
                </Button>
            </footer>
        </article>
    );
}
