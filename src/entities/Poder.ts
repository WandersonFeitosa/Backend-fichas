import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuarios";

@Entity("Poderes")
export class Poder{
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ type: "text" })
    nome: string;

    @Column({ type: "text", nullable: true })
    atividade: string;

    @Column({ type: "numeric" })
    custo: Number;

    @Column({ type: "text" })
    duracao: string;

    @Column({ type: "text", nullable: true })
    funcoes: string;

    @Column({ type: "text" })
    alvo: string;

    @Column({ type: "text" , nullable: true})
    descricao: string;

    @Column({ type: "boolean", nullable: true })
    paranormal: Boolean;

    @Column({ type: "text", nullable: true })
    afinidade: string;    

    @Column({ type: "text", nullable: true })
    melhoramento: string;

    @Column({ type: "text", nullable: true })
    funcao_melhoramento: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.poderes)
    @JoinColumn({ name: "usuario_id" })
    usuario: Usuario;

}