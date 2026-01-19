import styles from './Intro.module.css';
import Button from '../Button/Button';

export function Intro() {
    return (
        <article className={styles.intro}>
            <p>
                Welcome to my personal corner of the Internet — a place I never really expected
                anyone to visit, including myself. I’m not entirely sure what this page is supposed
                to be, but here it is, existing anyway...
            </p>
            <br />
            <p>
                If you’ve stumbled in, please don’t take anything too seriously; I certainly didn’t
                when I made it. You may find a few posts scattered around, mostly written for
                experimental or placeholder purposes. They’re not meant to form a proper blog or
                deliver anything particularly meaningful — at least not yet. For now, they exist
                simply to fill space, test ideas, and give this site something to be, until its
                purpose (if any) becomes clearer in the future.
            </p>
            <footer>
                <Button as='link' href='/posts' variant='ghost' size='md'>
                    Got it!
                </Button>
            </footer>
        </article>
    );
}
