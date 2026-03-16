import { IsString, IsNotEmpty, IsISO8601, MinLength } from 'class-validator';

export class CreateEventoDto {
  @IsString({ message: 'O nome deve ser uma string.' })
  @IsNotEmpty({ message: 'O nome do evento não pode estar vazio.' })
  @MinLength(3, { message: 'O nome do evento deve ter pelo menos 5 caracteres.' })
  nome: string;

  @IsISO8601({}, { message: 'A data deve estar no formato ISO8601 (ex: 2026-03-20T10:00:00Z).' })
  @IsNotEmpty({ message: 'A data é obrigatória.' })
  data: string;
}