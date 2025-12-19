import { ViewTransition } from 'react';
import { promises as fs } from 'fs';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import NotFound from '@/ui/shared/NotFound/NotFound';
import styles from './page.module.css';
import { PostsService } from '@/lib/services/posts/service';

const postsService = new PostsService();

type BlogPostProps = {
    title: string;
    date: string;
    params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params;
    const meta = await postsService.getPostMeta(slug);

    if (!meta) return <NotFound />;

    const { title, publishedAt } = meta;
    let post;

    try {
        post = await postsService.getPost(slug);
    } catch {}

    return post ? (
        <ViewTransition>
            <section className={styles.post}>
                <header>
                    <ViewTransition name={'post-' + slug}>
                        <h1 id="post">{title}</h1>
                    </ViewTransition>
                    <p>[{new Date(publishedAt).toLocaleDateString()}]</p>
                </header>
                <article aria-labelledby="post">
                    <Markdown remarkPlugins={[remarkGfm]}>{post}</Markdown>
                </article>
            </section>
        </ViewTransition>
    ) : (
        <NotFound />
    );
}
