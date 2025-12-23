import { ViewTransition } from 'react';
import Image from 'next/image';
import styles from './PostListItem.module.css';
import { PostMeta } from '../../types';

type PostLIstItemProps = {
    post: PostMeta;
};

export default function PostListItem({ post }: PostLIstItemProps) {
    return (
        <article className={styles.post}>
            <main>
                <ViewTransition name={'post-' + post.slug}>
                    <h2>{post.title}</h2>
                </ViewTransition>
                <p>{post.description}</p>
                {`[${new Date(post.publishedAt).toLocaleDateString()}]`}
            </main>
            <section>
                {post.picture && (
                    <Image
                        alt={post.picture.alt}
                        src={`${process.env.S3_IMG_SRC}/${post.picture.filename}`}
                        width={post.picture.width}
                        height={post.picture.height}
                    />
                )}
            </section>
        </article>
    );
}
