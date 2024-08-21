import { ApiProperty } from "@nestjs/swagger";
import { Users } from "src/users/users.model";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRoles } from "./user-roles.model";


@Entity()
export class Role {
    @ApiProperty({example: '1', description: 'unique identifier'})
    @PrimaryGeneratedColumn()
    id:number;
    
    @ApiProperty({example: 'Admin', description: 'user role'})
    @Column({ type: 'varchar', length: 255, unique:true })
    value: string;

    @ApiProperty({example: 'Admin', description: 'role description'})
    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

   @ManyToMany(() => Users, ()=> UserRoles)
   users: Users[];
    userRoles: any;
}