import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const notFoundError = (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "Route not found",
    url: req.originalUrl,
  });
};

export default notFoundError;
