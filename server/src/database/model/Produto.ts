import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('produtos')
class Produto {
  @PrimaryGeneratedColumn('increment') id: number;

  @Column() nome: string;

  @Column() codigo: string;
}

export default Produto;
