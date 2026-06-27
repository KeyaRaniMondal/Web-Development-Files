import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';
import { LoginUserPayload } from './auth.interface';

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const payload: LoginUserPayload = req.body;
    const result = await AuthServices.loginUserFromDB(payload);

    // If using cookies for Refresh Tokens later in the module:
    // const { refreshToken, accessToken } = result;
    // res.cookie('refreshToken', refreshToken, {
    //     secure: process.env.NODE_ENV === 'production',
    //     httpOnly: true,
    //     sameSite: 'strict',
    // });

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'User logged in successfully!',
        data: {
            // accessToken,
        },
    });
});

export const AuthControllers = {
    loginUser,
};