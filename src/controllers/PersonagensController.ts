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
      acrobacia,
      adestramento,
      artes,
      atletismo,
      atualidades,
      ciencias,
      crime,
      diplomacia,
      enganacao,
      fortitude,
      furtividade,
      iniciativa,
      intimidação,
      intuicao,
      investigacao,
      luta,
      medicina,
      ocultismo,
      percepcao,
      pilotagem,
      pontaria,
      profissao,
      reflexos,
      religiao,
      sobreviencia,
      tatica,
      tecnologia,
      vontade,
      id_usuario,
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
    if (nex == 99) {
      var nivel_nex = 20;
    } else {
      var nivel_nex = Math.floor(nex / 5);
    }

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

    try {
      const usuario = await usuarioReposiory.findOneBy({
        id: String(id_usuario),
      });

      if (!usuario) {
        return res.status(404).json({ message: "O usuário não existe" });
      }

      //CRIAR PERSONAGEM
      const newPersonagem = personagensReposiory.create({
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
        acrobacia,
        adestramento,
        artes,
        atletismo,
        atualidades,
        ciencias,
        crime,
        diplomacia,
        enganacao,
        fortitude,
        furtividade,
        iniciativa,
        intimidação,
        intuicao,
        investigacao,
        luta,
        medicina,
        ocultismo,
        percepcao,
        pilotagem,
        pontaria,
        profissao,
        reflexos,
        religiao,
        sobreviencia,
        tatica,
        tecnologia,
        vontade,
        usuario,
      });

      await personagensReposiory.save(newPersonagem);

      return res.status(201).json({
        message: "Seu personagem foi criado com sucesso",
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async vincularMesa(req: Request, res: Response) {
    const { id_mesa, personagem_id } = req.body;

    try {
      //VERIFICAR PERSONAGEM
      const personagem = await personagensReposiory.findOneBy({
        id: String(personagem_id),
      });

      if (!personagem) {
        return res.status(404).json({ message: "O personagem não existe" });
      }

      //VERIFICAR MESA

      const mesa = await mesasReposiory.findOneBy({ id: id_mesa });

      if (!mesa) {
        return res.status(404).json({ message: "A mesa não existe" });
      }

      //VINCULAR MESA
      await personagensReposiory.update(personagem_id, {
        ...personagem,
        mesa: mesa,
      });

      return res.status(200).json(personagem);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async list(req: Request, res: Response) {
    const {  id_usuario } = req.body;

    try {
      const personagens = await personagensReposiory.find({
        where: {
          usuario: {
            id: id_usuario,
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
