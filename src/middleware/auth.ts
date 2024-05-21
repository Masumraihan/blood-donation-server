import { StatusCodes } from "http-status-codes";
import ApiError from "../errors/ApiError";
import catchAsync from "../shared/catchAsync";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import config from "../config";
import { UserRole } from "../../prisma/generated/client";

const auth = (...roles: UserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, "Please provide authorization token");
    }

    let decoded: JwtPayload = {};
    try {
      decoded = jwt.verify(token, config.accessTokenSecret as Secret) as JwtPayload;
    } catch (error) {
      next(error);
    }
    if (roles.length && !roles.includes(decoded.role)) {
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        "your are not authorized to access this resource",
      );
    }

    req.user = decoded;
    next();
  });
};

export default auth;
