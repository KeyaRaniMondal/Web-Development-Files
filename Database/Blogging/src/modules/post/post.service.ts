import { CommentStatus, PostStatus } from "../../../prisma/generated/prisma/enums"
import { prisma } from "../../lib/prisma"
import { ICreatePostPayload, IUpdatePostPayload } from "./post.interface"

const createPost = async (payload : ICreatePostPayload, userId : string) => {
    const result = await prisma.post.create({
        data : {
            ...payload,
            authorId : userId
        }
    })

    return result
}

const getAllPosts = async () => {
    const posts = await prisma.post.findMany(
        {
            include : {
                author : {
                    omit : {
                        password : true
                    }
                },
                comments : true
            }
        }
    );

    return posts
}

const getPostById = async (postId : string) => {

    // await prisma.post.update({
    //     where : {
    //         id : postId,
    //     },
    //     data : {
    //         views : {
    //             increment : 1
    //         },
    //     }
    // })

    // throw new Error("Fake Error")

    // const post = await prisma.post.findUniqueOrThrow({
    //     where : {
    //         id : postId
    //     },

    //     include : {
    //         author : {
    //             omit : {
    //                 password : true
    //             }
    //         },

    //         comments : {
    //             where : {
    //                 status : CommentStatus.APPROVED
    //             },

    //             orderBy : {
    //                 createdAt : "desc"
    //             }
    //         },

    //         _count : {
    //             select : {
    //                 comments : true
    //             }
    //         }
    //     }
    // })

    // return post

    const transactionResult = await prisma.$transaction(
        async (tx) => {
            await tx.post.update({
                where: {
                    id: postId,
                },
                data: {
                    views: {
                        increment: 1
                    },
                }
            });
            // throw new Error("fake error")
            const post = await tx.post.findUniqueOrThrow({
                where: {
                    id: postId
                },

                include: {
                    author: {
                        omit: {
                            password: true
                        }
                    },

                    comments: {
                        where: {
                            status: CommentStatus.APPROVED
                        },

                        orderBy: {
                            createdAt: "desc"
                        }
                    },

                    _count: {
                        select: {
                            comments: true
                        }
                    }
                }
            });
            return post
        }
    );

    return transactionResult

}

const updatePost = async (postId : string, payload : IUpdatePostPayload, authorId : string, isAdmin : boolean) => {
    const post = await prisma.post.findUniqueOrThrow({
        where : {
            id : postId
        }
    })

    if(!isAdmin && post.authorId !== authorId ){
        throw new Error("You are not the owner of this post!")
    }

    const result = await prisma.post.update({
        where : {
            id : postId
        },
        data : payload,
        include: {
            author: {
                omit: {
                    password: true
                }
            },
            comments: true
        }
    })

    return result;
}

const deletePost = async (postId: string, authorId: string, isAdmin: boolean) => {
    const post = await prisma.post.findUniqueOrThrow({
        where: {
            id: postId
        }
    });

    if (!isAdmin && post.authorId !== authorId) {
        throw new Error("You are not the owner of this post!")
    }

    await prisma.post.delete({
        where : {
            id : postId
        }
    })

}

const getPostsStats = async () => {
    const transactionResult = await prisma.$transaction(
        async (tx) => {
            // const totalPosts = await tx.post.count();

            // const totalPublishedPosts = await tx.post.count({
            //     where : {
            //         status : PostStatus.PUBLISHED
            //     }
            // })
            // const totalDraftPosts = await tx.post.count({
            //     where : {
            //         status : PostStatus.DRAFT
            //     }
            // })
            // const totalArchivedPosts = await tx.post.count({
            //     where : {
            //         status : PostStatus.ARCHIVED
            //     }
            // })

            // const totalComments = await tx.comment.count();

            // const totalApprovedComments = await tx.comment.count({
            //     where : {
            //         status : CommentStatus.APPROVED
            //     }
            // });
            // const totalRejectedComments = await tx.comment.count({
            //     where : {
            //         status : CommentStatus.REJECT
            //     }
            // });

            // //Not a good approach
            // // const allPosts = await tx.post.findMany();

            // // let totalPostViews = 0;

            // // allPosts.forEach((post)=>{
            // //     totalPostViews = totalPostViews + post.views
            // // })

            // //Good Approach
            // const totalPostViewsAggregate = await tx.post.aggregate({
            //     _sum : {
            //         views : true
            //     }
            // })

            // const totalPostViews = totalPostViewsAggregate._sum.views\

            // return {
            //     totalPosts,
            //     totalPublishedPosts,
            //     totalDraftPosts,
            //     totalArchivedPosts,
            //     totalComments,
            //     totalApprovedComments,
            //     totalRejectedComments,
            //     totalPostViews
            // }


            const [
                totalPosts,
                totalPublishedPosts,
                totalDraftPosts,
                totalArchivedPosts,
                totalComments,
                totalApprovedComments,
                totalRejectedComments,
                totalPostViewsAggregate
            ] = await Promise.all([
                await tx.post.count(),
                await tx.post.count({
                    where: {
                        status: PostStatus.PUBLISHED
                    }
                }),
                await tx.post.count({
                    where: {
                        status: PostStatus.DRAFT
                    }
                }),
                await tx.post.count({
                    where: {
                        status: PostStatus.ARCHIVED
                    }
                }),
                await tx.comment.count(),
                await tx.comment.count({
                    where: {
                        status: CommentStatus.APPROVED
                    }
                }),
                await tx.comment.count({
                    where: {
                        status: CommentStatus.REJECT
                    }
                }),
                await tx.post.aggregate({
                    _sum: {
                        views: true
                    }
                })
            ]);


            return {
                totalPosts,
                totalPublishedPosts,
                totalDraftPosts,
                totalArchivedPosts,
                totalComments,
                totalApprovedComments,
                totalRejectedComments,
                totalPostViews : totalPostViewsAggregate._sum.views
            }
        }
    );

    return transactionResult
}

const getMyPosts = async (authorId : string) => {

    const result = await prisma.post.findMany({
        where : {
            authorId
        },

        orderBy : {
            createdAt : "desc"
        },

        include : {
            comments : true,
            author : {
                omit : {
                    password : true
                }
            },

            _count : {
                select : {
                    comments : true
                }
            }
        }
    });

    return result;

}

export const postService = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    getPostsStats,
    getMyPosts
}