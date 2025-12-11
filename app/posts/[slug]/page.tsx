import { promises as fs } from 'fs';
import styles from './page.module.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import NotFound from '@/components/NotFound/NotFound';

type BlogPostProps = {
    title: string;
    date: string;
    params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params;
    const meta = JSON.parse(await fs.readFile(process.cwd() + `/posts/meta.json`, 'utf8'));

    if (!meta['posts'][slug]) return <NotFound />;

    const { title, publishedAt, quote } = meta['posts'][slug];
    let post;

    try {
        post = await fs.readFile(process.cwd() + `/posts/${slug}.md`, 'utf8');
    } catch {}

    return post ? (
        <section className={styles.post}>
            <h1>{title}</h1>
            <p>[{new Date(publishedAt).toLocaleDateString()}]</p>
            {quote && (
                <blockquote>
                    <p>{quote.text}</p>
                    <p>{quote.author}</p>
                </blockquote>
            )}
            <article>
                <Markdown remarkPlugins={[remarkGfm]}>{post}</Markdown>
            </article>
        </section>
    ) : (
        <NotFound />
    );
}
