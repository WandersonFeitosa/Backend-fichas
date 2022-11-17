import { NextFunction, Request, Response } from "express";

export const headerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type, Authentication, Authorization"
  );
  // Pass to next layer of middleware
  next();
};
