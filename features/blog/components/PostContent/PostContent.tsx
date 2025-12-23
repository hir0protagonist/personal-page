import remarkGfm from 'remark-gfm';
import { getPost } from '../../services/posts.service';
import styles from './PostContent.module.css';
import Markdown from 'react-markdown';
import NotFound from '@/ui/components/NotFound/NotFound';
import { PostLanguage } from '../../types';

type PostContentProps = {
    slug: string;
    lang: PostLanguage;
};

export default async function PostContent({ slug, lang }: PostContentProps) {
    const post = (await getPost(slug + `_${lang}`)) || (await getPost(slug));

    return post ? (
        <article aria-labelledby="post" className={styles.post}>
            <Markdown remarkPlugins={[remarkGfm]}>{post}</Markdown>
        </article>
    ) : (
        <NotFound message="Uh-Oh... This post no longer exists." />
    );
}
