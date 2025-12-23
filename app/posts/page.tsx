import { ViewTransition } from 'react';
import PostList from '@/features/blog/components/PostList/PostList';

export default async function Posts() {
    return (
        <ViewTransition>
            <PostList></PostList>
        </ViewTransition>
    );
}
