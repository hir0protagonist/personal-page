import Header from '@/ui/components/Header/Header';
import styles from './PostsList.module.css';
import PostsListItems from '../PostsListItems/PostsListItems';

export default async function PostList() {
    return (
        <div>
            <Header
                links={[
                    { href: '/', title: 'About' },
                    { title: 'Posts', href: '/posts', active: true },
                ]}
            />
            <section className={styles.posts}>
                <PostsListItems></PostsListItems>
            </section>
        </div>
    );
}
