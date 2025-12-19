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
    const meta = JSON.parse(await fs.readFile(process.cwd() + `/posts/meta.json`, 'utf8'));

    if (!meta['posts'][slug]) return <NotFound />;

    const { title, published } = meta['posts'][slug];
    let post;

    try {
        //post = await fs.readFile(process.cwd() + `/posts/${slug}.md`, 'utf8');
        post = await postsService.getPost(slug);//AwsService.getObject(`${slug}.md`);
    } catch {}

    return post ? (
        <ViewTransition>
            <section className={styles.post}>
                <header>
                    <ViewTransition name={'post-' + slug}>
                        <h1 id="post">{title}</h1>
                    </ViewTransition>
                    <p>[{new Date(published).toLocaleDateString()}]</p>
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
