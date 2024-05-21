import { StatusCodes } from "http-status-codes";
import { JsonWebTokenError } from "jsonwebtoken";
import { TErrorResponse } from "../types/error";

const jwtError = (error: JsonWebTokenError): TErrorResponse => {
  return {
    statusCode: StatusCodes.UNAUTHORIZED,
    message: error.message,
    errorDetails: { issues: [{ field: error.name, message: error.message }] },
  };
};

export default jwtError;
