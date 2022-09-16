import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663308219843 implements MigrationInterface {
    name = 'default1663308219843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "afinidade" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "afinidade"`);
    }

}
