import bcrypt from "bcryptjs";
import config from "../../config";
import { prisma } from "../../lib/prisma";
import { RegisterUserPayload } from "./user.interface";

const registerUserIntoDB = async (payload: RegisterUserPayload) =>{
    const { name, email, password, profilePhoto } = payload;
    const isUserExist = await prisma.user.findUnique({
        where: { email }
    })

    if (isUserExist) {
        throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, Number(config.BCRYPT_SALT_ROUNDS))

    const createdUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    });

    await prisma.profile.create({
        data: {
            userId: createdUser.id,
            profilePhoto
        }
    })

    const user = await prisma.user.findUnique({
        where: {
            id: createdUser.id,
            email: createdUser.email || email
        },
        omit: {
            password: true
        },
        include: {
            profile: true
        }
    })

    return user;
}

export const userService = {
    registerUserIntoDB
}