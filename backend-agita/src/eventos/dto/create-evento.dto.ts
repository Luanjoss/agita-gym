// No arquivo create-evento.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsISO8601,
  MinLength,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventoDto {
  @ApiProperty({
    description: 'Título do evento',
    example: 'Aula de Yoga',
  })
  @IsString({ message: 'O nome deve ser uma string.' })
  @IsNotEmpty({ message: 'O nome do evento não pode estar vazio.' })
  @MinLength(5, {
    message: 'O nome do evento deve ter pelo menos 5 caracteres.',
  }) // Ajustado para 5
  titulo: string;

  @ApiProperty({
    description: 'Data do evento no formato ISO8601',
    example: '2024-12-31T18:00:00Z',
  })
  @IsISO8601({}, { message: 'A data deve estar no formato ISO8601.' })
  @IsNotEmpty({ message: 'A data é obrigatória.' })
  dataEvento: string;

  @ApiProperty({
    description: 'Descrição opcional do evento',
    example: 'Uma aula de yoga para relaxar e fortalecer o corpo.',
  })
  @IsString()
  @IsOptional() // Isso permite que o evento seja criado sem descrição se quiser
  descricao?: string;
}
