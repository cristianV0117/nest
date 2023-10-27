import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
