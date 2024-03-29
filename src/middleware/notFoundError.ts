import { Request, Response } from "express";

const notFoundError = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    url: req.originalUrl,
  });
};

export default notFoundError;
