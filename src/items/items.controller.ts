import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Inject } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './infrastructure/dto/create-item.dto';
import { UpdateItemDto } from './infrastructure/dto/update-item.dto';
import { CreateItemRequest } from './infrastructure/request/create-item-request';
import { Item } from './infrastructure/repositories/orm/item.entity';
import { ItemReceivedRequest } from 'src/items_received/request/item-received-request';
import { io } from "socket.io-client";

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
    const socket = io("http://localhost:3000")
    socket.emit('message', { data: "hola" })
    socket.on('message', ({ data }) => {
      console.log(data)
      socket.disconnect()
    })
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