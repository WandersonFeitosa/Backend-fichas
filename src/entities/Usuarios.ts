import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Mesa } from "./Mesa";
import { Persongaem } from "./Personagem";

@Entity("Usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text", nullable: true })
  sobrenome: string;

  @Column({ type: "text" })
  username: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  senha: string;

  @OneToMany(() => Mesa, (mesa) => mesa.usuario)
  mesas: Mesa[];

  @OneToMany(() => Persongaem, (personagem) => personagem.usuario)
  personagens: Persongaem[];
}
