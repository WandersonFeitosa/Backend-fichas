import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662625075944 implements MigrationInterface {
    name = 'default1662625075944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Usuarios" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "sobrenome" text, "username" text NOT NULL, "email" text NOT NULL, "senha" text NOT NULL, CONSTRAINT "PK_6b4c9e5c7d35b294307b3fd0fea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Mesas" ("id" SERIAL NOT NULL, "titulo" text NOT NULL, "personagens" text NOT NULL, "usuario_id" integer, CONSTRAINT "PK_e38649eac38a0039544302804cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Mesas" ADD CONSTRAINT "FK_9388244b34577fd02a5ff9a0f5e" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Mesas" DROP CONSTRAINT "FK_9388244b34577fd02a5ff9a0f5e"`);
        await queryRunner.query(`DROP TABLE "Mesas"`);
        await queryRunner.query(`DROP TABLE "Usuarios"`);
    }

}
