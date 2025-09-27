
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBarbershopDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  adress: string;


}
