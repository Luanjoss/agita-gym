import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Faz com que o PrismaService fique disponível em todo o app
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
