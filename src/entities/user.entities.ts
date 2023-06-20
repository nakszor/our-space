import { Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate,CreateDateColumn ,Column, Unique } from 'typeorm';
import {hashSync, getRounds} from 'bcryptjs';
@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250, nullable: false })
  name: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 250, nullable: false })
  email: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
  if (this.password) {
      this.password = hashSync(this.password, 8);
  }
  }
};

export default User