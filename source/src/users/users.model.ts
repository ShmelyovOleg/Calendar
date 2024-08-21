import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @ApiProperty({ example: '1', description: 'unique identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'John Dou', description: 'user name' })
  @Column({ type: 'varchar', length: 255, nullable: true })
  username: string;

  @ApiProperty({ example: '1234567', description: 'user password' })
  @Column({ type: 'varchar', length: 255 })
  password: string;

  @ApiProperty({ example: 'JohnDou@gmail.com', description: 'user email' })
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @ApiProperty({ example: 'fullstack developer', description: 'user position' })
  @Column({ type: 'varchar', length: 255, nullable: true })
  position: string;

  @ApiProperty({ example: 'fired', description: 'user status' })
  @Column({ type: 'varchar', length: 255, nullable: true })
  status: string;

  @ApiProperty({
    example: '2024-08-13 10:27:58',
    description: 'user create date',
  })
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-08-13 10:27:58',
    description: 'user update date',
  })
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ApiProperty({
    example: '2024-08-13 10:27:58',
    description: 'user last login',
  })
  @Column({ type: 'timestamp', nullable: true })
  lastLogin: Date;

  @ManyToMany(() => Role, () => UserRoles)
  @JoinTable()
  roles: Role[];
  userRoles: any;
}
