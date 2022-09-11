import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662871214015 implements MigrationInterface {
    name = 'default1662871214015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Itens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" text NOT NULL, "crit" numeric, "ameaca" numeric, "dano_arma" text, "categoria" numeric NOT NULL, "tamanho" numeric, "info" text, "usuario_id" uuid, CONSTRAINT "PK_07e63f5dc5948ad236653cfb40a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" text NOT NULL, "sobrenome" text, "username" text NOT NULL, "email" text NOT NULL, "senha" text NOT NULL, CONSTRAINT "PK_6b4c9e5c7d35b294307b3fd0fea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Mesas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" text NOT NULL, "usuario_id" uuid, CONSTRAINT "PK_e38649eac38a0039544302804cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Personagens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" text NOT NULL, "origem" text NOT NULL, "nex" numeric NOT NULL, "classe" text, "trilha" text, "patente" text, "idade" numeric, "pv_atual" numeric NOT NULL, "ps_atual" numeric NOT NULL, "pe_atual" numeric NOT NULL, "pv_max" numeric NOT NULL, "ps_max" numeric NOT NULL, "pe_max" numeric NOT NULL, "res_fisica" numeric NOT NULL, "res_balistica" numeric NOT NULL, "res_sangue" numeric NOT NULL, "res_morte" numeric NOT NULL, "res_energia" numeric NOT NULL, "res_conhecimento" numeric NOT NULL, "forca" numeric NOT NULL, "agilidade" numeric NOT NULL, "inteligencia" numeric NOT NULL, "presenca" numeric NOT NULL, "vigor" numeric NOT NULL, "invetario_id" uuid, "usuario_id" uuid, "mesa_id" uuid, CONSTRAINT "REL_465f2bb5c4b23137acb126076e" UNIQUE ("invetario_id"), CONSTRAINT "PK_a4448bd52099163e4823673fefa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Inventarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "capacidade" numeric NOT NULL, "personagem_id" uuid, CONSTRAINT "REL_b0f88cd1431aefe07b65d88b22" UNIQUE ("personagem_id"), CONSTRAINT "PK_6893dd7634b6bc4f6828f5c9459" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Itens" ADD CONSTRAINT "FK_0fdafe9e44bc77ededf0b80a5e6" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Mesas" ADD CONSTRAINT "FK_9388244b34577fd02a5ff9a0f5e" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD CONSTRAINT "FK_465f2bb5c4b23137acb126076e6" FOREIGN KEY ("invetario_id") REFERENCES "Inventarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD CONSTRAINT "FK_7d045545199e5dc743829df5221" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD CONSTRAINT "FK_de007fe84bd284005a94c237961" FOREIGN KEY ("mesa_id") REFERENCES "Mesas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Inventarios" ADD CONSTRAINT "FK_b0f88cd1431aefe07b65d88b229" FOREIGN KEY ("personagem_id") REFERENCES "Personagens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Inventarios" DROP CONSTRAINT "FK_b0f88cd1431aefe07b65d88b229"`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP CONSTRAINT "FK_de007fe84bd284005a94c237961"`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP CONSTRAINT "FK_7d045545199e5dc743829df5221"`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP CONSTRAINT "FK_465f2bb5c4b23137acb126076e6"`);
        await queryRunner.query(`ALTER TABLE "Mesas" DROP CONSTRAINT "FK_9388244b34577fd02a5ff9a0f5e"`);
        await queryRunner.query(`ALTER TABLE "Itens" DROP CONSTRAINT "FK_0fdafe9e44bc77ededf0b80a5e6"`);
        await queryRunner.query(`DROP TABLE "Inventarios"`);
        await queryRunner.query(`DROP TABLE "Personagens"`);
        await queryRunner.query(`DROP TABLE "Mesas"`);
        await queryRunner.query(`DROP TABLE "Usuarios"`);
        await queryRunner.query(`DROP TABLE "Itens"`);
    }

}
