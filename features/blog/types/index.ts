export type PostLanguage = 'en' | 'ru';

export type PostTOCItem = {
    id: string;
    text: string | Record<string, string>;
};

export type PostMeta = {
    slug: string;
    title: string;
    publishedAt: string;
    description: string;
    picture: {
        filename: string;
        alt: string;
        width: number;
        height: number;
    };
    languages?: PostLanguage[];
    tableOfContent?: PostTOCItem[];
};
