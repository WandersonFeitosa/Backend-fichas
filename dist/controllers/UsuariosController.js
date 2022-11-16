"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const usuariosRepository_1 = require("../repositories/usuariosRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UsuariosController {
    async create(req, res) {
        const { nome, sobrenome, username, email, senha } = req.body;
        try {
            //VERIFICAR SE O EMAIL ESTA DISPONIVEL
            const verifyMail = await usuariosRepository_1.usuarioReposiory.findOneBy({ email });
            if (verifyMail) {
                return res
                    .status(400)
                    .json({ message: "O email já está sendo utilizado" });
            }
            //VERIFICAR SE O USERNAME ESTA DISPONIVEL
            const verifyUsername = await usuariosRepository_1.usuarioReposiory.findOneBy({ username });
            if (verifyUsername) {
                return res
                    .status(400)
                    .json({ message: "O Username já está sendo utilizado" });
            }
            //CRIPTOGRAFAR SENHA
            const hashSenha = await bcrypt_1.default.hash(senha, 10);
            //CADASTRAR USUARIO
            const newUsuario = usuariosRepository_1.usuarioReposiory.create({
                nome,
                sobrenome,
                username,
                email,
                senha: hashSenha,
            });
            await usuariosRepository_1.usuarioReposiory.save(newUsuario);
            return res.status(201).json({ newUsuario });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async login(req, res) {
        var _a;
        const { username, senha } = req.body;
        //VERIFICAR SE O USERNAME ESTÁ CORRETO
        const user = await usuariosRepository_1.usuarioReposiory.findOneBy({ username });
        if (!user) {
            return res.status(400).json({ message: "Username ou senha invalidos" });
        }
        //VERIFICAR SE A SENHA ESTÁ CORRETA
        const verifySenha = await bcrypt_1.default.compare(senha, user.senha);
        if (!verifySenha) {
            return res.status(400).json({ message: "Username ou senha invalidos" });
        }
        const token = jsonwebtoken_1.default.sign({ id: username.id }, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        return res.json({
            message: "tá logado",
            token: token,
        });
    }
    async getProfile(req, res) {
        return res.json(req.user);
    }
}
exports.UsuariosController = UsuariosController;
