import { CommentStatus } from "../../../prisma/generated/prisma/enums";

export interface ICreateCommentPayload {
    postId: string;
    authorId: string;
    content: string;
}

export interface IUpdateCommentPayload { 
    content ?: string, 
    status ?: CommentStatus 
}

export interface IModerateCommentPayload {
    status: CommentStatus
}