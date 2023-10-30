import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ItemIndexController } from './infrastructure/controllers/item-index.controller';
import { ItemsOrmRepository } from './infrastructure/repositories/orm/items-orm.repository';
import { ItemIndexUseCase } from './application/get/item-index.usecase';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item], 'nest'),
    ClientsModule.register([{
      name: 'CAT_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'cats_queue',
        queueOptions: {
          durable: false
        },
      }
    }]),
  ],
  controllers: [ItemsController, ItemIndexController],
  providers: [ItemsService, {
    provide: ItemIndexUseCase,
    useClass: ItemsOrmRepository
  }],
})
export class ItemsModule {}
