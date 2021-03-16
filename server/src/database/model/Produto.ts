import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('produtos')
class Produto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  codigo: string;
  @Column()
  nome: string;

  constructor({ codigo, nome }: Omit<Produto, 'id'>) {
    this.codigo = codigo;
    this.nome = nome;
  }
}

export default Produto;
