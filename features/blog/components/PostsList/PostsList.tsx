import Header from '@/ui/components/Header/Header';
import styles from './PostsList.module.css';
import PostsListItems from '../PostsListItems/PostsListItems';

export default async function PostList() {
    return (
        <div>
            <Header title='[Not a] Blog' />
            <section className={styles.posts}>
                <PostsListItems></PostsListItems>
            </section>
        </div>
    );
}
