import { IsNotEmpty, IsString } from 'class-validator';

export class editUserDto {
  @IsString()
  @IsNotEmpty()
  name?: string;
  @IsString()
  @IsNotEmpty()
  surname?: string;
  @IsString()
  @IsNotEmpty()
  age?: number;
}
