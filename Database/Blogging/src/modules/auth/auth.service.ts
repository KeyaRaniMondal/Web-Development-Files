import bcrypt from "bcryptjs";
import { JwtPayload, SignOptions } from "jsonwebtoken";
import config from "../../config";
import { prisma } from "../../lib/prisma";
import  {jwtUtils}  from "../../utils/jwt";
import { ILoginUser } from "./auth.interface";

const loginUser = async (payload : ILoginUser) => {
    const { email, password } = payload;

    // const user = await prisma.user.findUnique({
    //     where : {email}
    // })

    // if(!user){
    //     throw new Error("User not found");
    // }

    const user = await prisma.user.findUniqueOrThrow({
        where : {email}
    })

    if (user.activeStatus === "BLOCKED") {
        throw new Error("Your account has been blocked. Please contact support.");
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if(!isPasswordMatched){
        throw new Error("Password is incorrect");
    }

    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }

    // const accessToken = jwt.sign(
    //     jwtPayload, 
    //     config.jwt_access_secret, 
    //     {
    //         expiresIn : config.jwt_access_expires_in
    //     } as SignOptions
    // )

    const accessToken = jwtUtils.createToken(
        jwtPayload,
        config.JWT_ACCESS_SECRET='',
        config.JWT_ACCESS_EXPIRES_IN as SignOptions
    );

    // const refreshToken = jwt.sign(
    //     jwtPayload, 
    //     config.jwt_refresh_secret, 
    //     {
    //         expiresIn : config.jwt_refresh_expires_in
    //     } as SignOptions
    // );

    const refreshToken = jwtUtils.createToken(
        jwtPayload,
        config.JWT_REFRESH_SECRET='',
        config.JWT_REFRESH_EXPIRES_IN as SignOptions
    );

    return {
        accessToken,
        refreshToken
    };
}

//for refreshtoken
const refreshToken=async(refreshToken:string)=>{
const verifiedRefreshToken=jwtUtils.verifyToken(refreshToken,config.JWT_REFRESH_SECRET as string)
if(!verifiedRefreshToken.success){
    throw Error(verifiedRefreshToken.error)
}
const{id}=verifiedRefreshToken.data as JwtPayload
const user=await prisma.user.findUniqueOrThrow({
    where:{
        id
    }
})
if(user.activeStatus==='BLOCKED'){
    throw new Error("user is blocked!")
}

const jwtPayload={
    id,
    name:user.name,
    email:user.email,
    role:user.role
}

const accessToken=jwtUtils.createToken(
    jwtPayload,
    config.JWT_ACCESS_SECRET as string,
    config.JWT_ACCESS_EXPIRES_IN as SignOptions
)
return {accessToken}
}
export const authService = {
    loginUser,
    refreshToken
}