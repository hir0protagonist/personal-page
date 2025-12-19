import { AwsService } from '../aws/service';
import { PostMeta } from './types';

export class PostsService {
    private aws = AwsService;

    constructor() {}

    getPost(slug: string): Promise<string> {
        return this.aws.getObject(`posts/${slug}.md`);
    }

    async getPostMeta(slug: string): Promise<PostMeta | undefined> {
        const meta = await this.listPosts();
        return meta.find((postMeta) => postMeta.slug === slug);
    }

    async listPosts(): Promise<PostMeta[]> {
        const response = await this.aws.getObject('posts.json');
        const meta = JSON.parse(response);
        return meta;
    }
}
