import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';

@Controller('eventos') // Isso cria a URL http://localhost:3000/eventos
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post() // Rota para CRIAR: POST /eventos
  criarEvento(@Body() dadosDoEvento: CreateEventoDto) {
    return this.eventosService.criar(dadosDoEvento);
  }

  @Get() // Rota para LISTAR: GET /eventos
  listarEventos() {
    return this.eventosService.listarTodos();
  }

  @Delete(':id') // Rota para DELETAR: DELETE /eventos/1
  removerEvento(@Param('id') id: string) {
    return this.eventosService.remover(+id);
  }

  @Get(':id')
  buscarUm(@Param('id') id: string) {
    return this.eventosService.buscarPorId(+id);
  }

  @Patch(':id') // PATCH é usado para atualizações parciais
  atualizar(@Param('id') id: string, @Body() dados: any) {
    return this.eventosService.atualizar(+id, dados);
  }
}
