import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Item as ItemMongo, ItemSchema } from 'src/schemas/item.schema';
import { Category, CategorySchema } from 'src/schemas/category.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ItemMongo.name,
        schema: ItemSchema
      },
      {
        name : Category.name,
        schema: CategorySchema
      }
    ]),
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
