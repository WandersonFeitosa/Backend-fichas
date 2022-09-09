import { Request, Response } from "express";
import { personagensReposiory } from "../repositories/personagensRepository";

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
      vigor,
    } = req.body;

    // var pv_max;

    var pv_max;
    var pe_max;
    var ps_max;
    const nivel_nex = nex / 5 - 1;
    if (classe == "combatente") {
     
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
    if (classe == "especialista") {
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
    if (classe == "ocultista") {
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
    const res_fisica = 0;
    const res_balistica = 0;
    const res_sangue = 0;
    const res_morte = 0;
    const res_energia = 0;
    const res_conhecimento = 0;

    try {
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
      });

      await personagensReposiory.save(newPersongaem);
      return res.status(201).json({ newPersongaem });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
