import { storageService } from '@/lib/services/storage';
import { PostMeta } from '../types';

export async function getPost(slug: string) {
    try {
        const res = await storageService.getObject(`posts/${slug}.md`);
        return res.Body!.transformToString();
    } catch {
        return null;
    }
}

export async function getPostMeta(slug: string) {
    const meta = await listPosts();
    return meta.find((postMeta) => postMeta.slug === slug) || null;
}

export async function listPosts(): Promise<PostMeta[]> {
    try {
        const { Body } = await storageService.getObject('posts.json');
        return JSON.parse(await Body!.transformToString());
    } catch {
        return [];
    }
}
