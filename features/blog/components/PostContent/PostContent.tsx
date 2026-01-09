import { MDXRemote } from 'next-mdx-remote-client/rsc';
import styles from './PostContent.module.css';
import { PostLanguage, PostTOCItem } from '../../types';
import { getPost } from '../../services/posts.service';
import TableOfContent from '../TableOfContent/TableOfContent';
import { notFound } from 'next/navigation';

type PostContentProps = {
    slug: string;
    lang: PostLanguage;
    tableOfContent?: PostTOCItem[];
};

export default async function PostContent({ slug, lang, tableOfContent = [] }: PostContentProps) {
    const post = (await getPost(slug + `_${lang}`)) || (await getPost(slug));

    if (!post) return notFound();

    return (
        <>
            <article aria-labelledby='post' className={styles.post}>
                <MDXRemote source={post} />
            </article>
            {!!tableOfContent.length && (
                <aside className={styles.aside}>
                    <TableOfContent items={tableOfContent} lang={lang} />
                </aside>
            )}
        </>
    );
}
