import { StatusCodes } from "http-status-codes";
import ApiError from "../errors/ApiError";
import catchAsync from "../shared/catchAsync";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import config from "../config";

const auth = () => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, "unauthorized");
    }

    let decoded: JwtPayload = {};
    try {
      decoded = jwt.verify(token, config.accessTokenSecret as Secret) as JwtPayload;
    } catch (error) {
      next(error);
    }
    req.user = decoded;
    next();
  });
};

export default auth;
