import { Response } from 'express';

export type SendResponsePayload = {
  statusCode: number;
  success: boolean;
  message: string;
  data?: unknown;
  error?: string;
};

const sendResponse = <T>(res: Response, payload: SendResponsePayload) => {
  const responseBody: Record<string, unknown> = {
    success: payload.success,
    statusCode: payload.statusCode,
    message: payload.message,
  };

  if (payload.data !== undefined) {
    responseBody.data = payload.data;
  }

  if (payload.error !== undefined) {
    responseBody.error = payload.error;
  }

  return res.status(payload.statusCode).json(responseBody);
};

export default sendResponse;
