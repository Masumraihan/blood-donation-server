import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  jsonData: {
    success: boolean;
    statusCode: number;
    message: string;
    meta?: { page: number; limit: number };
    data: T;
  },
) => {
  res.status(jsonData.statusCode).json({
    success: jsonData.success,
    message: jsonData.message,
    meta: jsonData.meta,
    data: jsonData.data,
  });
};
export default sendResponse;
