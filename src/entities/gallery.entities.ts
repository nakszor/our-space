import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import User from "./user.entities";
  
  @Entity("galleries")
  export class Gallery {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;
  
    @Column({ type: "text", nullable: true })
    imageUrl: string | null | undefined;
  
    @ManyToOne(() => User, (users) => users.gallery)
    user: User;
    
  }