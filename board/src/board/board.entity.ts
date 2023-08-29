import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  boardId: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
