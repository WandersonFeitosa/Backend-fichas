"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const usuariosRepository_1 = require("../repositories/usuariosRepository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = async (req, res, next) => {
    var _a;
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: "NÃO AUTORIZADO" });
    }
    try {
        //FORMATAR TOKEN
        const token = authorization.split(" ")[1];
        //BUSCAR ID DO TOKEN
        const { id } = jsonwebtoken_1.default.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        //VERIFICAR USUARIO
        const user = await usuariosRepository_1.usuarioReposiory.findOneBy({ id });
        if (!user) {
            return res.status(401).json({ message: "NÃO AUTORIZADO" });
        }
        const { senha: _, ...loggedUser } = user;
        req.user = loggedUser;
        next();
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};
exports.authMiddleware = authMiddleware;
