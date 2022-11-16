"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InventariosController_1 = require("../controllers/InventariosController");
const ItensController_1 = require("../controllers/ItensController");
const MesasController_1 = require("../controllers/MesasController");
const PersonagensController_1 = require("../controllers/PersonagensController");
const PoderesController_1 = require("../controllers/PoderesController");
const RituaisController_1 = require("../controllers/RituaisController");
const UsuariosController_1 = require("../controllers/UsuariosController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const routes = (0, express_1.Router)();
//ROTAS DE USUARIO
routes.post("/usuario", new UsuariosController_1.UsuariosController().create);
routes.post("/login", new UsuariosController_1.UsuariosController().login);
routes.use(authMiddleware_1.authMiddleware);
routes.get("/profile", new UsuariosController_1.UsuariosController().getProfile);
//ROTAS DE MESA
routes.get("/listMesa", new MesasController_1.MesasController().listMesas);
routes.get("/listarPersonagens/", new MesasController_1.MesasController().listPersonagensMesa);
routes.post("/createMesa", new MesasController_1.MesasController().create);
//ROTAS DE PERSONGAEM
routes.get("/listPersonagem", new PersonagensController_1.PersonagensController().list);
routes.post("/createPersonagem", new PersonagensController_1.PersonagensController().create);
routes.patch("/vincularMesa", new PersonagensController_1.PersonagensController().vincularMesa);
//ROTAS DE INVETARIO
routes.get("/listInventario", new InventariosController_1.InventariosController().list);
routes.post("/createInventario", new InventariosController_1.InventariosController().create);
routes.post("/adicionarItem", new InventariosController_1.InventariosController().adicionarItem);
//ROTAS DE ITEM
routes.get("/listItem", new ItensController_1.ItensController().list);
routes.post("/createItem", new ItensController_1.ItensController().create);
//ROTAS DE RITUAL
routes.post("/createRitual", new RituaisController_1.RituaisController().create);
//ROTAS DE PODER
routes.post("/createPoder", new PoderesController_1.PoderesController().create);
exports.default = routes;
