import { Suspense, ViewTransition } from 'react';
import LanguageSelect from '@/features/blog/components/LanguageSelect/LanguageSelect';
import NotFound from '@/ui/components/NotFound/NotFound';
import PostContentLoader from '../PostContentPlaceholder/PostContentPlaceholder';
import PostContent from '../PostContent/PostContent';
import { PostLanguage } from '../../types';
import { getPostMeta } from '../../services/posts.service';
import styles from './Post.module.css';

type PostProps = {
    slug: string;
    language: string | undefined;
};

export default async function Post({ slug, language }: PostProps) {
    const meta = await getPostMeta(slug);
    const languages = meta?.languages || ['en'];
    const lang = (language || languages[0]) as PostLanguage;

    return meta ? (
        <article className={styles.post}>
            <header>
                <ViewTransition name={'post-' + slug}>
                    <h1 id="post">{meta.title}</h1>
                </ViewTransition>
                <section>
                    <p>[{new Date(meta.publishedAt).toLocaleDateString()}]</p>
                    {languages.length > 1 && <LanguageSelect lang={lang} />}
                </section>
            </header>
            <Suspense fallback={<PostContentLoader />}>
                <PostContent slug={slug} lang={lang} />
            </Suspense>
        </article>
    ) : (
        <NotFound />
    );
}
