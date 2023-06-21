import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { User } from "./user.entities";

  @Entity("posts")
  export class Post {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar" })
    type: string;

    @Column({ type: "varchar" })
    title: string;

    @Column({ type: "text" })
    content: string;
  
    @ManyToOne(() => User, (user) => user.posts)
    user: User;
  
  }