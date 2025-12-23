import { ViewTransition } from 'react';
import Post from '@/features/blog/components/Post/Post';

type PostPageProps = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ lang: string | undefined }>;
};

export default async function BlogPost({ params, searchParams }: PostPageProps) {
    const { slug } = await params;
    const { lang } = await searchParams;

    return (
        <ViewTransition>
            <Post slug={slug} language={lang}></Post>
        </ViewTransition>
    );
}
