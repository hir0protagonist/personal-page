import { ViewTransition } from 'react';
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
        <article className={styles['not-found']}>
            <section className={styles.scene}>
                <Image alt='Tumbleweed' src='/tumbleweed.png' width={125} height={125} />
            </section>
            <ViewTransition name='content'>
                <p>{message || `Uh-Oh... This page has been removed or never existed.`}</p>
            </ViewTransition>
            {backLink && (
                <Button as='link' variant='ghost' href={backLink.href}>
                    {backLink.text}
                </Button>
            )}
        </article>
    );
}
