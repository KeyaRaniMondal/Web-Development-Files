import {prisma} from '../../lib/prisma';
import bcrypt from 'bcryptjs';
import { LoginUserPayload, AuthTokens, JwtPayload } from './auth.interface';


const loginUserFromDB = async (payload: LoginUserPayload)=> {
    // 1. Check if the user exists in the database
    const userData = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });

    if (!userData) {
        throw new Error('User does not exist!');
    }

    // 2. Verify if the password matches the hashed password
    const isPasswordMatched = await bcrypt.compare(payload.password, userData.password);

    if (!isPasswordMatched) {
        throw new Error('Password incorrect!');
    }

    // 3. Create Access Token
    const jwtPayload = {
        email: userData.email,
        role: userData.role, // Assuming a 'role' field exists in your Prisma schema
    };

};

export const AuthServices = {
    loginUserFromDB,
};