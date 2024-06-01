import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { JsonWebTokenError } from "jsonwebtoken";
import { ZodError } from "zod";
import ApiError from "../errors/ApiError";
import jwtError from "../errors/jwtError";
import zodError from "../errors/zodError";
import { TErrorResponse } from "../types/error";

const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let errorResponse: TErrorResponse = {
    statusCode,
    message: "Internal server error",
    errorDetails: null,
  };

  if (error instanceof ZodError) {
    errorResponse = zodError(error);
  } else if (error instanceof JsonWebTokenError) {
    errorResponse = jwtError(error);
  } else if (error instanceof ApiError) {
    errorResponse.statusCode = error.statusCode;
    errorResponse.message = error.message;
  } else if (error.name === "PrismaClientKnownRequestError") {
    errorResponse.statusCode = StatusCodes.BAD_REQUEST;
    const target = error.meta?.target as string[] | undefined;
    errorResponse.message = target ? `${target[0]} is already exist` : `constraint failed`;
  }
  //TODO: THIS IS NOT WORK NEED TO FIND THE ISSUE
  //else if (error instanceof PrismaClientRustPanicError) {
  //  console.log(error, "err");
  //}
  else if (error instanceof Error) {
    errorResponse.message = error.message;
    errorResponse.errorDetails = {
      issues: [{ field: "unknown", message: error.message }],
    };
  }

  res.status(errorResponse.statusCode).json({
    success: false,
    message: errorResponse.message,
    errorDetails: errorResponse.errorDetails,
  });
};

export default globalErrorHandler;
