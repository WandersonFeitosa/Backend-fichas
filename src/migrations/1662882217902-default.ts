import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662882217902 implements MigrationInterface {
    name = 'default1662882217902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Usuarios" ADD CONSTRAINT "UQ_ca3e46c76538a31e48348447503" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Usuarios" DROP CONSTRAINT "UQ_ca3e46c76538a31e48348447503"`);
    }

}
