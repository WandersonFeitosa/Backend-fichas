import { Request, Response } from "express";
import { mesasReposiory } from "../repositories/mesasRepository";
import { usuarioReposiory } from "../repositories/usuariosRepository";

export class UsuariosController {
  async create(req: Request, res: Response) {
    const { nome, sobrenome, username, email, senha } = req.body;

    if (!nome) {
      return res.status(400).json({ message: "O nome é obrigatorio" });
    }

    try {
      const newUsuario = usuarioReposiory.create({
        nome,
        sobrenome,
        username,
        email,
        senha,
      });

      await usuarioReposiory.save(newUsuario);

      return res.status(201).json({ newUsuario });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  
}
