import { ViewTransition } from 'react';
import PostsList from '@/features/blog/components/PostsList/PostsList';

export default async function Page() {
    return (
        <ViewTransition>
            <PostsList></PostsList>
        </ViewTransition>
    );
}
