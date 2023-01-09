import { Request, Response } from "express";
import { mesasReposiory } from "../repositories/mesasRepository";
import { personagensReposiory } from "../repositories/personagensRepository";
import { usuarioReposiory } from "../repositories/usuariosRepository";

export class PersonagensController {
  async create(req: Request, res: Response) {
    const {
      name,
      origin,
      nex,
      classe,
      trail,
      rank,
      afinity,
      versatility,
      age,
      attributes,
      skills,
      id_usuario,
    } = req.body;

    //DEFAULT VALUES

    //CALCULADOR DE STATUS
    if (nex == 99) {
      var nivel_nex = 20;
    } else {
      var nivel_nex = Math.floor(nex / 5);
    }
    let pv_max;
    let pe_max;
    let ps_max;
    function calcularSaude(
      vidaPorNivel: number,
      vidaInicial: number,
      pePorNivel: number,
      peInicial: number,
      sanidadePorNivel: number,
      sanidadeInicial: number
    ) {
      //Cálculo de PV
      let pv_adicional_classe = vidaPorNivel + attributes.vig;
      const pv_nivel_nex = nivel_nex * pv_adicional_classe;
      pv_max = vidaInicial + attributes.vig + pv_nivel_nex;

      //Cálculo de PE
      const pe_adicional_classe = pePorNivel + attributes.pre;
      const pe_nivel_nex = nivel_nex * pe_adicional_classe;
      pe_max = peInicial + attributes.pre + pe_nivel_nex;

      //Cálculo de PS
      const ps_nivel_nex = nivel_nex * sanidadePorNivel;
      ps_max = sanidadeInicial + ps_nivel_nex;
    }

    if (classe == "Combatente") {
      calcularSaude(4, 20, 2, 2, 3, 12);
    }
    if (classe == "Especialista") {
      calcularSaude(3, 16, 3, 3, 4, 16);
    }
    if (classe == "Ocultista") {
      calcularSaude(2, 12, 4, 4, 5, 20);
    }

    const pv_atual = pv_max;
    const ps_atual = ps_max;
    const pe_atual = pe_max;

    const stats = {
      pv_max,
      ps_max,
      pe_max,
      pv_atual,
      ps_atual,
      pe_atual,
    };
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
        name,
        origin,
        nex,
        classe,
        trail,
        rank,
        afinity,
        versatility,
        age,
        attributes,
        stats,
        skills,
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
      if (personagem_id.length < 36 || personagem_id.length > 36) {
        return res.status(404).json({ message: "Insira um ID válido" });
      }
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

      return res
        .status(200)
        .json({ message: "Seu personagem foi vinculado com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async list(req: Request, res: Response) {
    const { id_usuario } = req.params;

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
