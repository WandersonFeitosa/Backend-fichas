import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Item } from "./Item";
import { Personagem } from "./Personagem";

@Entity("Inventarios")
export class Inventario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "numeric" })
  capacidade: Number;

  @OneToOne(() => Personagem, (personagem) => personagem.inventario)
  @JoinColumn({ name: "personagem_id" })
  personagem: Personagem;

  @ManyToMany(() => Item, (item) => item.inventarios)  
  itens: Item[];
}
