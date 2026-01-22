import { Suspense, ViewTransition } from 'react';
import LanguageSelect from '@/features/blog/components/LanguageSelect/LanguageSelect';
import PostContentLoader from '../PostContentPlaceholder/PostContentPlaceholder';
import PostContent from '../PostContent/PostContent';
import { PostLanguage } from '../../types';
import { getPostMeta } from '../../services/posts.service';
import styles from './Post.module.css';
import Button from '@/ui/components/Button/Button';
import { notFound } from 'next/navigation';
import clsx from 'clsx';

type PostProps = {
    slug: string;
    language: string | undefined;
};

export default async function Post({ slug, language }: PostProps) {
    const meta = await getPostMeta(slug);
    const languages = meta?.languages || ['en'];
    const lang = (language || languages[0]) as PostLanguage;

    if (!meta) return notFound();

    return (
        <article className={clsx(styles.post, meta.tableOfContent && styles['post_wide'])}>
            <header>
                <ViewTransition name={'post-' + slug}>
                    <h1 id='post'>{meta.title}</h1>
                </ViewTransition>
                <section>
                    <p>[{new Date(meta.publishedAt).toLocaleDateString()}]</p>
                    {languages.length > 1 && <LanguageSelect lang={lang} />}
                </section>
            </header>

            <Suspense fallback={<PostContentLoader />}>
                <div className={styles.content}>
                    <PostContent slug={slug} lang={lang} tableOfContent={meta.tableOfContent} />
                </div>
                <div className={styles.nav}>
                    <Button as='link' href='/posts' variant='ghost'>
                        More Posts
                    </Button>
                </div>
            </Suspense>
        </article>
    );
}
