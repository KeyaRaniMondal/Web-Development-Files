import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import  catchAsync  from "../../utils/catchAsync";
import  sendResponse  from "../../utils/sendResponse";
import { authService } from "./auth.service";

const loginUser = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    const payload = req.body;

    const {accessToken, refreshToken} = await authService.loginUser(payload);

    res.cookie("accessToken", accessToken, {
        httpOnly : true,
        secure : false,
        sameSite : "none",
        maxAge : 1000 * 60 * 60 * 24 // 24 hour or 1 day
    })

    res.cookie("refreshToken", refreshToken, {
        httpOnly : true,
        secure : false,
        sameSite : "none",
        maxAge : 1000 * 60 * 60 * 24 * 7 // 7 day
    })

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User logged in successfully",
        data: { accessToken, refreshToken }
    });
});

//for refresh token
const refreshToken=catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
const refreshToken=req.cookies.refreshToken;

const {accessToken}=await authService.refreshToken(refreshToken);
    res.cookie("accessToken", accessToken, {
        httpOnly : true,
        secure : false,
        sameSite : "none",
        maxAge : 1000 * 60 * 60 * 24 // 24 hour or 1 day
    })
sendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:"Token refreshed successfully",
    data: { accessToken }
})
})
export const authController = {
    loginUser,
    refreshToken
}