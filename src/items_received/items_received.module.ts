import { Module } from '@nestjs/common';
import { ItemsReceivedService } from './items_received.service';
import { ItemsReceivedController } from './items_received.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsReceived } from './entities/items_received.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemsReceived], 'nestdocker')
  ],
  controllers: [ItemsReceivedController],
  providers: [ItemsReceivedService],
})
export class ItemsReceivedModule {}
