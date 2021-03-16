import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProduto1615874636901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'produto',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'codigo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produto');
  }
}
