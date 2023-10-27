import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Logger } from '@nestjs/common';
import { ItemsReceivedService } from './items_received.service';
import { CreateItemsReceivedDto } from './dto/create-items_received.dto';
import { UpdateItemsReceivedDto } from './dto/update-items_received.dto';
import { ItemReceivedRequest } from './request/item-received-request';
import { MessagePattern } from '@nestjs/microservices';

@Controller('items-received')
export class ItemsReceivedController {
  constructor(private readonly itemsReceivedService: ItemsReceivedService) {}

  @MessagePattern('event')
  async handleEvent(data: ItemReceivedRequest) {
    this.itemsReceivedService.create(data)
  }
}
