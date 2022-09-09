import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Item } from "./Item";
import { Personagem } from "./Personagem";

@Entity("Inventarios")
export class Inventario {
  @PrimaryGeneratedColumn()
  id: Number;  

  @Column({ type: "numeric" })
  capacidade: Number;

  @OneToOne(() => Personagem, (personagem) => personagem.inventario)
  @JoinColumn({ name: "personagem_id" })
  personagem: Personagem;

  @ManyToMany(() => Item, (item) => item.inventarios)
  @JoinTable({
    name: "item_inventario",
    joinColumn: {
      name: "item_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "inventario_id",
      referencedColumnName: "id",
    },
  })
  itens: Item[];
}
