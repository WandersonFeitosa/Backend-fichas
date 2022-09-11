import { NextFunction, Request, Response } from "express";
import { usuarioReposiory } from "../repositories/usuariosRepository";
import jwt from "jsonwebtoken";

type JwtPayload = {
  id: string;
};

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "NÃO AUTORIZADO" });
  }

  //FORMATAR TOKEN
  const token = authorization.split(" ")[1];

  //BUSCAR ID DO TOKEN
  const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload;

  //VERIFICAR USUARIO
  const user = await usuarioReposiory.findOneBy({ id });

  if (!user) {
    return res.status(401).json({ message: "NÃO AUTORIZADO" });
  }
  const { senha: _, ...loggedUser } = user;

  req.user = loggedUser;

  next();
};
