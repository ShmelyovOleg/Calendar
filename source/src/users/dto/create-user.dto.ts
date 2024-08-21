import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'JohnDou@gmail.com', description: 'user email'})
    readonly email: string;

    @ApiProperty({example: '123456', description: 'user password'})
    readonly password:string;
}