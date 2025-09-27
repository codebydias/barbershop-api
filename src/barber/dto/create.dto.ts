
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBarberDto {

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

   @IsNotEmpty()
  cpf: string

  @IsOptional()
  description: string

}
