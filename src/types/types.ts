import type { ReactNode } from "react";

export interface Articles {
    status: string,
    totalResults: number,
    results: {
        title: string,
        link?: string,
        source_id: string,
        keywords?: [],
        creator?: [],
        image_url: string,
        video_url?: string,
        description?: string,
        pubDate?: string,
        content?: string,
        country?: [],
        category?: [],
        language?: string,
    }[],
    nextPage: number,
}
export interface Blogs {
    author: unknown;
    createdAt: ReactNode;
    id: string,
    blogId: string;
    userId: string;
    title: string;
    description: string;
    img: string;
}
export interface Projects {
    amount: string
    createdAt: Date,
    description: string,
    id: string,
    level: string,
    time: string,
    title: string,
    user: {
        email: string,
        id: string,
        name: string
    },
    category: string
}
export interface Project {
    title: string,
    amount: string
    createdAt: Date,
    description: string,
    id: string,
    level: string,
    time: string,

    user: {
        email: string,
        id: string,
        name: string
    },
    category: string

}
export interface LogInfo {
    user: {
        email: string,
        id: string,
        image: string,
        name: string
        password: string
        emailVerified: string
    },
    expires: Date,
    accessToken: string
}
export { };