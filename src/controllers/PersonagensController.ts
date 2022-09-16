import { Request, Response } from "express";
import { mesasReposiory } from "../repositories/mesasRepository";
import { personagensReposiory } from "../repositories/personagensRepository";
import { usuarioReposiory } from "../repositories/usuariosRepository";

export class PersonagensController {
  async create(req: Request, res: Response) {
    const {
      nome,
      origem,
      nex,
      classe,
      trilha,
      patente,
      idade,
      forca,
      agilidade,
      inteligencia,
      presenca,
      afinidade,
      vigor,
    } = req.body;

    //DEFAULT VALUES
    var pv_max;
    var pe_max;
    var ps_max;
    const res_fisica = 0;
    const res_balistica = 0;
    const res_sangue = 0;
    const res_morte = 0;
    const res_energia = 0;
    const res_conhecimento = 0;

    //CALCULADOR DE STATUS

    const nivel_nex = nex / 5 - 1;
    if (classe == "Combatente") {
      //Cálculo de PV
      let pv_adicional_classe = 4 + vigor;
      const pv_nivel_nex = nivel_nex * pv_adicional_classe;
      pv_max = 20 + vigor + pv_nivel_nex;

      //Cálculo de PE
      const pe_adicional_classe = 2 + presenca;
      const pe_nivel_nex = nivel_nex * pe_adicional_classe;
      pe_max = 2 + presenca + pe_nivel_nex;

      //Cálculo de PS
      const ps_nivel_nex = nivel_nex * 3;
      ps_max = 12 + ps_nivel_nex;
    }
    if (classe == "Especialista") {
      //Cálculo de PV
      let pv_adicional_classe = 3 + vigor;
      const pv_nivel_nex = nivel_nex * pv_adicional_classe;
      pv_max = 16 + vigor + pv_nivel_nex;

      //Cálculo de PE
      const pe_adicional_classe = 3 + presenca;
      const pe_nivel_nex = nivel_nex * pe_adicional_classe;
      pe_max = 3 + presenca + pe_nivel_nex;

      //Cálculo de PS
      const ps_nivel_nex = nivel_nex * 4;
      ps_max = 16 + ps_nivel_nex;
    }
    if (classe == "Ocultista") {
      //Cálculo de PV
      let pv_adicional_classe = 2 + vigor;
      const pv_nivel_nex = nivel_nex * pv_adicional_classe;
      pv_max = 12 + vigor + pv_nivel_nex;

      //Cálculo de PE
      const pe_adicional_classe = 4 + presenca;
      const pe_nivel_nex = nivel_nex * pe_adicional_classe;
      pe_max = 4 + presenca + pe_nivel_nex;

      //Cálculo de PS
      const ps_nivel_nex = nivel_nex * 5;
      ps_max = 20 + ps_nivel_nex;
    }
    const pv_atual = pv_max;
    const ps_atual = ps_max;
    const pe_atual = pe_max;
    //CHECAR USUARIO
    const { idUsuario } = req.params;

    try {
      const usuario = await usuarioReposiory.findOneBy({
        id: String(idUsuario),
      });

      if (!usuario) {
        return res.status(404).json({ message: "O usuário não existe" });
      }

      //CRIAR PERSONAGEM
      const newPersongaem = personagensReposiory.create({
        nome,
        origem,
        nex,
        classe,
        trilha,
        patente,
        idade,
        forca,
        agilidade,
        inteligencia,
        presenca,
        vigor,
        afinidade,
        pv_max,
        ps_max,
        pe_max,
        pv_atual,
        ps_atual,
        pe_atual,
        res_fisica,
        res_balistica,
        res_sangue,
        res_morte,
        res_energia,
        res_conhecimento,
        usuario,
      });

      await personagensReposiory.save(newPersongaem);
      return res.status(201).json({ newPersongaem });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async vincularMesa(req: Request, res: Response) {
    const { mesa_id } = req.body;
    const { idPersonagem } = req.params;
    try {
      //VERIFICAR PERSONAGEM
      const personagem = await personagensReposiory.findOneBy({
        id: String(idPersonagem),
      });

      if (!personagem) {
        return res.status(404).json({ message: "O personagem não existe" });
      }

      //VERIFICAR MESA

      const mesa = await mesasReposiory.findOneBy({ id: mesa_id });

      if (!mesa) {
        return res.status(404).json({ message: "A mesa não existe" });
      }

      //VINCULAR MESA
      await personagensReposiory.update(idPersonagem, {
        ...personagem,
        mesa: mesa,
      });

      return res.status(200).json(personagem);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async list(req: Request, res: Response) {
    const { idUsuario } = req.params;

    try {
      const personagens = await personagensReposiory.find({
        where: {
          usuario: {
            id: idUsuario,
          },
        },
      });      

      if (!personagens) {
        return res.json("O usuário ainda não possui personagens");
      }

      return res.json(personagens);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
