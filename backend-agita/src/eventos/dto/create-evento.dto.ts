// No arquivo create-evento.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsISO8601,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateEventoDto {
  @IsString({ message: 'O nome deve ser uma string.' })
  @IsNotEmpty({ message: 'O nome do evento não pode estar vazio.' })
  @MinLength(5, {
    message: 'O nome do evento deve ter pelo menos 5 caracteres.',
  }) // Ajustei para 5 conforme a mensagem
  titulo: string;

  @IsISO8601({}, { message: 'A data deve estar no formato ISO8601.' })
  @IsNotEmpty({ message: 'A data é obrigatória.' })
  dataEvento: string;

  @IsString()
  @IsOptional() // Isso permite que o evento seja criado sem descrição se quiser
  descricao?: string;
}
