import { Request, Response } from "express";
import { usuarioReposiory } from "../repositories/usuariosRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UsuariosController {
  async create(req: Request, res: Response) {
    const { nome, sobrenome, username, email, senha } = req.body;

    try {
      //VERIFICAR SE O EMAIL ESTA DISPONIVEL
      const verifyMail = await usuarioReposiory.findOneBy({ email });

      if (verifyMail) {
        return res
          .status(400)
          .json({ message: "O email já está sendo utilizado" });
      }

      //VERIFICAR SE O USERNAME ESTA DISPONIVEL
      const verifyUsername = await usuarioReposiory.findOneBy({ username });
      if (verifyUsername) {
        return res
          .status(400)
          .json({ message: "O Username já está sendo utilizado" });
      }

      //CRIPTOGRAFAR SENHA
      const hashSenha = await bcrypt.hash(senha, 10);

      //CADASTRAR USUARIO
      const newUsuario = usuarioReposiory.create({
        nome,
        sobrenome,
        username,
        email,
        senha: hashSenha,
      });

      await usuarioReposiory.save(newUsuario);

      return res.status(201).json({ message: "Usuário criado com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async login(req: Request, res: Response) {
    const { username, senha } = req.body;

    //VERIFICAR SE O USERNAME ESTÁ CORRETO
    const user = await usuarioReposiory.findOneBy({ username });

    if (!user) {
      return res.status(400).json({ message: "Username ou senha invalidos" });
    }

    //VERIFICAR SE A SENHA ESTÁ CORRETA
    const verifySenha = await bcrypt.compare(senha, user.senha);

    if (!verifySenha) {
      return res.status(400).json({ message: "Username ou senha invalidos" });
    }

    const token = jwt.sign({ id: username.id }, process.env.JWT_PASS ?? "");

    return res.json({
      message: "tá logado",
      token: token,
    });
  }

  async getProfile(req: Request, res: Response) {
    return res.json(req.user);
  }
}
