import { Router } from "express";
import { Role } from "../../../prisma/generated/prisma/enums";
import { auth } from "../middleware/auth";
import { postController } from "./post.controller";

const router = Router();
router.post(
    "/", 
    auth(Role.USER, Role.ADMIN, Role.AUTHOR), postController.createPost
);

router.get("/", postController.getAllPosts);

router.get(
    "/stats", 
    auth(Role.ADMIN),
    postController.getPostsStats
);

router.get(
    "/my-posts",
    auth(Role.USER, Role.ADMIN, Role.AUTHOR),
    postController.getMyPosts
);

router.get("/:postId", postController.getPostById);

router.patch(
    "/:postId", 
    auth(Role.USER, Role.ADMIN, Role.AUTHOR), 
    postController.updatePost
);

router.delete(
    "/:postId", 
    auth(Role.USER, Role.ADMIN, Role.AUTHOR), 
    postController.deletePost
);




export const postRoutes = router;