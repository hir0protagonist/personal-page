import Link from 'next/link';
import PostListItem from '../PostsListItem/PostsListItem';
import { listPosts } from '../../services/posts.service';

import styles from './PostsListItems.module.css';

export default async function PostsListItems() {
    const posts = await listPosts();

    return (
        <section className={styles.posts}>
            {posts.map((post) => (
                <Link key={post.slug} href={`/posts/${post.slug}`}>
                    <PostListItem post={post} />
                </Link>
            ))}
        </section>
    );
}
