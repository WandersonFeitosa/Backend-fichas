import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./Usuarios";

@Entity("Personagens")
export class Persongaem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  personagens: string;

  @Column({ type: "text" })
  origem: string;

  @Column({ type: "text" })
  nex: string;

  @Column({ type: "text" })
  classe: string;

  @Column({ type: "text" })
  trilha: string;

  @Column({ type: "text" })
  patente: string;

  @Column({ type: "text" })
  idade: number;

  @Column({ type: "text" })
  pv_atual: number;

  @Column({ type: "text" })
  ps_atual: number;

  @Column({ type: "text" })
  pe_atual: number;

  @Column({ type: "text" })
  pv_max: number;

  @Column({ type: "text" })
  ps_max: number;

  @Column({ type: "text" })
  pe_max: number;

  @Column({ type: "text" })
  res_fisica: number;

  @Column({ type: "text" })
  res_balistica: number;

  @Column({ type: "text" })
  res_sangue: number;

  @Column({ type: "text" })
  res_morte: number;

  @Column({ type: "text" })
  res_energia: number;

  @Column({ type: "text" })
  res_conhecimento: number;

  @Column({ type: "text" })
  forca: number;

  @Column({ type: "text" })
  agilidade: number;

  @Column({ type: "text" })
  inteligencia: number;

  @Column({ type: "text" })
  presenca: number;

  @Column({ type: "text" })
  vigor: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.personagens)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;
}
