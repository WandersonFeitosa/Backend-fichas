import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Inventario } from "./Inventario";
import { Mesa } from "./Mesa";
import { Usuario } from "./Usuarios";

interface Pericia {
  name: string;
  valor: number;
}

@Entity("Personagens")
export class Personagem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  origem: string;

  @Column({ type: "numeric" })
  nex: Number;

  @Column({ type: "text", nullable: true })
  classe: string;

  @Column({ type: "text", nullable: true })
  trilha: string;

  @Column({ type: "text", nullable: true })
  patente: string;

  @Column({ type: "numeric", nullable: true })
  idade: Number;

  @Column({ type: "text", nullable: true })
  afinidade: String;

  @Column({ type: "numeric" })
  pv_atual: Number;

  @Column({ type: "numeric" })
  ps_atual: Number;

  @Column({ type: "numeric" })
  pe_atual: Number;

  @Column({ type: "numeric" })
  pv_max: Number;

  @Column({ type: "numeric" })
  ps_max: Number;

  @Column({ type: "numeric" })
  pe_max: Number;

  @Column({ type: "numeric" })
  res_fisica: Number;

  @Column({ type: "numeric" })
  res_balistica: Number;

  @Column({ type: "numeric" })
  res_sangue: Number;

  @Column({ type: "numeric" })
  res_morte: Number;

  @Column({ type: "numeric" })
  res_energia: Number;

  @Column({ type: "numeric" })
  res_conhecimento: Number;

  @Column({ type: "numeric" })
  forca: Number;

  @Column({ type: "numeric" })
  agilidade: Number;

  @Column({ type: "numeric" })
  inteligencia: Number;

  @Column({ type: "numeric" })
  presenca: Number;

  @Column({ type: "numeric" })
  vigor: Number;

  @Column({ type: "numeric" })
  acrobacia: Number;

  @Column({ type: "numeric" })
  adestramento: Number;

  @Column({ type: "numeric" })
  artes: Number;

  @Column({ type: "numeric" })
  atletismo: Number;

  @Column({ type: "numeric" })
  atualidades: Number;

  @Column({ type: "numeric" })
  ciencias: Number;

  @Column({ type: "numeric" })
  crime: Number;

  @Column({ type: "numeric" })
  diplomacia: Number;

  @Column({ type: "numeric" })
  enganacao: Number;

  @Column({ type: "numeric" })
  fortitude: Number;

  @Column({ type: "numeric" })
  furtividade: Number;

  @Column({ type: "numeric" })
  iniciativa: Number;

  @Column({ type: "numeric" })
  intimidação: Number;

  @Column({ type: "numeric" })
  intuicao: Number;

  @Column({ type: "numeric" })
  investigacao: Number;

  @Column({ type: "numeric" })
  luta: Number;

  @Column({ type: "numeric" })
  medicina: Number;

  @Column({ type: "numeric" })
  ocultismo: Number;

  @Column({ type: "numeric" })
  percepcao: Number;

  @Column({ type: "numeric" })
  pilotagem: Number;

  @Column({ type: "numeric" })
  pontaria: Number;

  @Column({ type: "numeric" })
  profissao: Number;

  @Column({ type: "numeric" })
  reflexos: Number;

  @Column({ type: "numeric" })
  religiao: Number;

  @Column({ type: "numeric" })
  sobreviencia: Number;

  @Column({ type: "numeric" })
  tatica: Number;

  @Column({ type: "numeric" })
  tecnologia: Number;

  @Column({ type: "numeric" })
  vontade: Number;

  @OneToOne(() => Inventario, (inventario) => inventario.personagem)
  @JoinColumn({ name: "invetario_id" })
  inventario: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.personagens)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;

  @ManyToOne(() => Mesa, (mesa) => mesa.personagens)
  @JoinColumn({ name: "mesa_id" })
  mesa: Mesa;
}
