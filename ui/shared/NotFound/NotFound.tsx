import Image from 'next/image';
import Link from 'next/link';
import styles from './NotFound.module.css';

type NotFoundProps = {
    backLink?: {
        href: string;
        text: string;
    };
};

export default function NotFound({ backLink }: NotFoundProps) {
    return (
        <section className={styles['not-found']}>
            <Image
                className={styles['image']}
                alt="Tumbleweed"
                src="/tumbleweed.png"
                width={150}
                height={150}
            />
            Uh-Oh... This page was removed or never existed
            {backLink && <Link href={backLink.href}>{backLink.text}</Link>}
        </section>
    );
}
