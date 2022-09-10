import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662840138595 implements MigrationInterface {
    name = 'default1662840138595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Itens" ALTER COLUMN "info" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Itens" ALTER COLUMN "info" SET NOT NULL`);
    }

}
