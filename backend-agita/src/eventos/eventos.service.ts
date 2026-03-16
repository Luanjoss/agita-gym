import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client'; // Importamos os tipos do Prisma

@Injectable()
export class EventosService {
  // Injetamos o PrismaService para usar o banco de dados
  constructor(private prisma: PrismaService) {}

  // Em vez de 'any', usaremos o tipo de criação gerado pelo Prisma
  async criar(dados: Prisma.EventoCreateInput) {
    return this.prisma.evento.create({
      data: dados,
    });
  }

  // Listar todos os eventos
  async listarTodos() {
    return this.prisma.evento.findMany();
  }

  // Deletar um evento pelo ID
  async remover(id: number) {
    return this.prisma.evento.delete({
      where: { id: Number(id) },
    });
  }

  async buscarPorId(id: number) {
    return this.prisma.evento.findUnique({
      where: { id },
    });
  }

  async atualizar(id: number, dados: any) {
    return this.prisma.evento.update({
      where: { id },
      data: dados,
    });
  }

} 