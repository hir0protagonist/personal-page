import Image from 'next/image';
import styles from './NotFound.module.css';
import Button from '../Button/Button';

type NotFoundProps = {
    backLink?: {
        href: string;
        text: string;
    };
    message?: string;
};

export default function NotFound({ backLink, message }: NotFoundProps) {
    return (
        <section className={styles['not-found']}>
            <Image
                className={styles['image']}
                alt='Tumbleweed'
                src='/tumbleweed.png'
                width={150}
                height={150}
            />
            {message || `Uh-Oh... This page has been removed or never existed. You're lost again. `}
            {backLink && (
                <Button as='link' variant='ghost' href={backLink.href}>
                    {backLink.text}
                </Button>
            )}
        </section>
    );
}
