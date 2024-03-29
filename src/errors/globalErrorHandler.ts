import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { TErrorResponse, TIssue } from "../types/error";
import zodError from "./zodError";

const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let errorResponse: TErrorResponse = {
    statusCode,
    message: "Internal server error",
    errorDetails: error,
  };

  if (error instanceof ZodError) {
    errorResponse = zodError(error);
  }
  res.status(errorResponse.statusCode).json({
    success: false,
    message: errorResponse.message,
    errorDetails: errorResponse.errorDetails,
    error,
  });
};

export default globalErrorHandler;
