import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password: string;
}
