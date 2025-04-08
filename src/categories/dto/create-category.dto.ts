import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString({message: 'El campo de la categoría debe ser un string'})
  @IsNotEmpty({message: 'El campo de la categoría no puede estar vacío'})
  name: string
}
