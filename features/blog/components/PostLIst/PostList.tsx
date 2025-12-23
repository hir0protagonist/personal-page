import Link from 'next/link';
import Header from '@/ui/layout/Header/Header';
import { listPosts } from '../../services/posts.service';
import PostListItem from '../PostListItem/PostListItem';
import styles from './PostList.module.css';

export default async function PostList() {
    const posts = await listPosts();

    return (
        <div>
            <Header title="[Not a] Blog" />
            <section className={styles.page}>
                <Link href="/">Back to homepage</Link>
                <section className={styles.posts}>
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/posts/${post.slug}`}>
                            <PostListItem post={post} />
                        </Link>
                    ))}
                </section>
            </section>
        </div>
    );
}
