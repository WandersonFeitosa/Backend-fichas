import { NextFunction, Request, Response } from "express";

export const headerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "*");

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "*");
  // Pass to next layer of middleware
  next();
};
