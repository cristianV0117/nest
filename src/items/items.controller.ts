import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Inject } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { CreateItemRequest } from './request/create-item-request';
import { Item } from './entities/item.entity';
import { ItemsReceivedController } from 'src/items_received/items_received.controller';
import { CreateItemsReceivedDto } from 'src/items_received/dto/create-items_received.dto';
import { ItemReceivedRequest } from 'src/items_received/request/item-received-request';
import { ItemsReceivedService } from 'src/items_received/items_received.service';

@Controller('items')
export class ItemsController {
  constructor(
    private readonly itemsService: ItemsService
  ) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    const request = new CreateItemRequest(createItemDto)
    const create = await this.itemsService.create(request)
    const itemReceivedRequest = new ItemReceivedRequest(create)
    this.getItemReceived(itemReceivedRequest)
    return create
  }

  getItemReceived(itemReceived: ItemReceivedRequest) {
    this.itemsService.itemReceived(itemReceived)
  }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}