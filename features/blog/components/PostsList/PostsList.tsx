import Header from '@/ui/components/Header/Header';
import styles from './PostsList.module.css';
import PostsListItems from '../PostsListItems/PostsListItems';
import { Suspense } from 'react';
import Loader from '@/ui/components/Loader/Loader';

export default async function PostList() {
    return (
        <div>
            <Header title='[Not a] Blog' />
            <section className={styles.posts}>
                <Suspense fallback={<Loader />}>
                    <PostsListItems></PostsListItems>
                </Suspense>
            </section>
        </div>
    );
}
