import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662707830439 implements MigrationInterface {
    name = 'default1662707830439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "personagens"`);
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "nex"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "nex" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "nex"`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "nex" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "personagens" text NOT NULL`);
    }

}
