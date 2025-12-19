import { ViewTransition } from 'react';
import Link from 'next/link';
import Header from '@/ui/layout/header/header';
import styles from './page.module.css';
import PostItem from '../../ui/posts/PostItem/PostItem';
import { PostsService } from '@/lib/services/posts/service';
import { PostMeta } from '@/lib/services/posts/types';

const postsService = new PostsService();

export default async function Posts() {
    const posts: PostMeta[] = await postsService.listPosts();

    return (
        <ViewTransition>
            <div>
                <Header title="[Not a] Blog" />
                <section className={styles.page}>
                    <Link href="/">Back to homepage</Link>
                    <section className={styles.posts}>
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/posts/${post.slug}`}>
                                <PostItem post={post} />
                            </Link>
                        ))}
                    </section>
                </section>
            </div>
        </ViewTransition>
    );
}
