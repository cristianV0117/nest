import { Controller } from '@nestjs/common';
import { ItemsReceivedService } from './items_received.service';
import { ItemReceivedRequest } from './request/item-received-request';
import { MessagePattern } from '@nestjs/microservices';

@Controller('items-received')
export class ItemsReceivedController {
  constructor(private readonly itemsReceivedService: ItemsReceivedService) {}

  @MessagePattern('event')
  async handleEvent(data: ItemReceivedRequest) {
    await this.itemsReceivedService.create(data)
  }
}
