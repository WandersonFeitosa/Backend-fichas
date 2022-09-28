import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./Usuarios";

@Entity("Rituais")
export class Ritual {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  execucao: string;

  @Column({ type: "text" })
  alcance: string;

  @Column({ type: "text" })
  alvo: string;

  @Column({ type: "text" })
  duracao: string;

  @Column({ type: "text" })
  descricao: string;

  @Column({ type: "text" })
  funcoes: string;

  @Column({ type: "numeric" })
  circulo: Number;

  @Column({ type: "text" })
  elemento: string;

  @Column({ type: "text", nullable: true })
  dano_elemental: string;

  @Column({ type: "text" })
  resistencia: string;

  @Column({ type: "text" })
  circulo_discente: string;

  @Column({ type: "text" })
  funcoes_discente: string;

  @Column({ type: "text" })
  resistencia_discente: string;

  @Column({ type: "text" })
  circulo_verdadeiro: string;

  @Column({ type: "text" })
  funcoes_verdadeiro: string;

  @Column({ type: "text" })
  resistencia_verdadeiro: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.rituais)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;
}
