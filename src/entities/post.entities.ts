import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { User } from "./user.entities";

  @Entity("posts")
  export class Post {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar",nullable: false })
    type: string;

    @Column({ type: "varchar",nullable: false })
    title: string;

    @Column({ type: "text",nullable: false })
    content: string;

    @CreateDateColumn({ nullable: false })
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.posts)
    user: User;
  
  }