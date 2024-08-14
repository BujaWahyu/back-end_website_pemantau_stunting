import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Baby {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column({ type: 'date' })
  tanggalLahir: Date;

  @Column({ type: 'date' })
  tanggalPertumbuhan: Date;

  @Column()
  beratBadan: number;

  @Column()
  tinggiBadan: number;

  @Column()
  lingkaranKepala: number;

  @Column()
  foto: string;
}

