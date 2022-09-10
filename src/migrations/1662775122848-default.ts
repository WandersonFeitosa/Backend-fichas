import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662775122848 implements MigrationInterface {
    name = 'default1662775122848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Itens" DROP COLUMN "modificadores"`);
        await queryRunner.query(`ALTER TABLE "Itens" DROP COLUMN "dano_modificadores"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Itens" ADD "dano_modificadores" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Itens" ADD "modificadores" text NOT NULL`);
    }

}
