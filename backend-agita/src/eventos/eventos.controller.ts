import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { EventosService } from './eventos.service';

@Controller('eventos') // Isso cria a URL http://localhost:3000/eventos
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post() // Rota para CRIAR: POST /eventos
  criarEvento(@Body() dadosDoEvento: any) {
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
}
