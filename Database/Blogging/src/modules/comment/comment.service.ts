import { prisma } from "../../lib/prisma"
import { ICreateCommentPayload, IModerateCommentPayload, IUpdateCommentPayload } from "./comment.interface"

const createComment = async (authorId: string, payload: ICreateCommentPayload) => {
    await prisma.post.findUniqueOrThrow({
        where: {
            id: payload.postId
        }
    })

    const comment = await prisma.comment.create({
        data: {
            ...payload,
            authorId
        },
        // include:{
        //     post : true
        // }
    })

    return comment
}

const getCommentByAuthorId = async (authorId: string) => {
    const comments = await prisma.comment.findMany({
        where: {
            authorId
        },
        orderBy: { createdAt: "desc" },
        include: {
            post: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })
    return comments
}

const getCommentByCommentId = async (postId : string) => {
    const comment = await prisma.comment.findMany({
        where: {
            postId
        }
    })
    return comment
}

const updateComment = async (commentId: string, data: IUpdateCommentPayload, authorId: string) => {
    const commentData = await prisma.comment.findUniqueOrThrow({
        where: {
            id: commentId,
            authorId
        },
        select: {
            id: true
        }
    })

    // if (!commentData) {
    //     throw new Error("Your provided input is invalid!")
    // }

    const comment =await prisma.comment.update({
        where: {
            id: commentId,
            authorId
        },
        data
    })

    return comment
}

const deleteComment = async (commentId: string, authorId: string) => {
    const commentData = await prisma.comment.findUniqueOrThrow({
        where: {
            id: commentId,
            authorId
        },
        select: {
            id: true
        }
    })

    // if (!commentData) {
    //     throw new Error("Your provided input is invalid!")
    // }

    const comment = await prisma.comment.delete({
        where: {
            id: commentData.id
        }
    });

    return comment;
}

const moderateComment = async (id: string, data: IModerateCommentPayload) => {
    const commentData = await prisma.comment.findUniqueOrThrow({
        where: {
            id
        },
        select: {
            id: true,
            status: true
        }
    });

    if (commentData.status === data.status) {
        throw new Error(`Your provided status (${data.status}) is already up to date.`)
    }

    const comment = await prisma.comment.update({
        where: {
            id
        },
        data
    });

    return comment;
}

export const commentService = {
    createComment,
    getCommentByAuthorId,
    getCommentByCommentId,
    updateComment,
    deleteComment,
    moderateComment
}