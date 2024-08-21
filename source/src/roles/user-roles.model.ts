import { ApiProperty } from "@nestjs/swagger";
import { Users } from "src/users/users.model";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./roles.model";


@Entity()
export class UserRoles {
    @PrimaryGeneratedColumn()
    id:number;
    
    @ManyToOne(() => Role, role => role.userRoles, { onDelete: 'CASCADE' }) 
    @JoinColumn({ name: 'roleId' })
    role: Role;
  
    @ManyToOne(() => Users, user => user.userRoles, { onDelete: 'CASCADE' }) 
    @JoinColumn({ name: 'userId' })
    user: Users;

}