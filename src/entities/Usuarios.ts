import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./Item";
import { Mesa } from "./Mesa";
import { Personagem } from "./Personagem";
import { Poder } from "./Poder";
import { Ritual } from "./Ritual";

@Entity("Usuarios")
export class Usuario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text", nullable: true })
  sobrenome: string;

  @Column({ type: "text", unique: true })
  username: string;

  @Column({ type: "text", unique: true })
  email: string;

  @Column({ type: "text" })
  senha: string;

  @OneToMany(() => Mesa, (mesa) => mesa.usuario)
  mesas: Mesa[];

  @OneToMany(() => Personagem, (personagem) => personagem.usuario)
  personagens: Personagem[];

  @OneToMany(() => Item, (item) => item.usuario)
  itens: Item[];

  @OneToMany(() => Ritual, (ritual) => ritual.usuario)
  rituais: Ritual[];

  @OneToMany(() => Poder, (poder) => poder.usuario)
  poderes: Poder[];
}
