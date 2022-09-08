import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662626298753 implements MigrationInterface {
    name = 'default1662626298753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Personagens" ADD "idade" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Personagens" DROP COLUMN "idade"`);
    }

}
