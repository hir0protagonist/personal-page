import Post from '@/features/blog/components/Post/Post';
import { Metadata, ResolvingMetadata } from 'next';
import { getPostMeta } from '@/features/blog/services/posts.service';

type PostPageProps = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ lang: string | undefined }>;
};

export async function generateMetadata(
    { params }: PostPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = (await params).slug;
    const meta = await getPostMeta(slug);

    return {
        title: meta?.title || (await parent).title,
        description: meta?.description || (await parent).description,
    };
}

export default async function BlogPage({ params, searchParams }: PostPageProps) {
    const { slug } = await params;
    const { lang } = await searchParams;

    return <Post slug={slug} language={lang}></Post>;
}
