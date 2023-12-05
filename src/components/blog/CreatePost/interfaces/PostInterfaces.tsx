export enum TypeContent {
    PARAGRAPH = 'paragraph',
    IMAGE = 'image',
    LINK = 'link',
    CODE = 'code',
    TITLE = 'title'
}

export interface Content {
    type: TypeContent;
    content: string;
    order: number;
}

export interface Form {
    title: string;
    content: Content[];
}
