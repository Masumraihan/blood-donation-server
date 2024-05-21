import { StatusCodes } from "http-status-codes";
import { TErrorResponse } from "../types/error";
import { ZodError } from "zod";

const zodError = (error: ZodError): TErrorResponse => {
  const issues = error.issues.map((issue) => ({
    field: issue.path[issue.path.length - 1] || "unknown",
    message: issue.message,
  }));

  return {
    statusCode: StatusCodes.BAD_REQUEST,
    message: "validation error",
    errorDetails: {
      issues,
    },
  };
};

export default zodError;
