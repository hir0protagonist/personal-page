import { ViewTransition } from 'react';
import PostList from '../../features/blog/components/PostList/PostList';

export default async function Page() {
    return (
        <ViewTransition>
            <PostList></PostList>
        </ViewTransition>
    );
}
