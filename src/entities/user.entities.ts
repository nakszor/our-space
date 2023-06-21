import { Entity, 
  PrimaryGeneratedColumn, 
  BeforeInsert, BeforeUpdate, 
  Column, 
  Unique, 
  OneToMany, 
  CreateDateColumn} from 'typeorm';
import {hashSync} from 'bcryptjs';
import { Post } from './post.entities';
import { Gallery } from './gallery.entities';
@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250, nullable: false })
  name: string;

  @Column({ length: 120, nullable: false  })
  password: string;

  @Column({ length: 250, nullable: false })
  username: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @OneToMany(() => Post, (posts) => posts.user,{ cascade: true, onDelete: "CASCADE" })
  posts: Post[];

  @OneToMany(() => Gallery, (gallery) => gallery.user, { cascade: true, onDelete: "CASCADE" })
  gallery: Gallery[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
  if (this.password) {
      this.password = hashSync(this.password, 8);
  }
  }
};

export default User