import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateItemDto } from './infrastructure/dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './infrastructure/repositories/orm/item.entity';
import { Repository } from 'typeorm';
import { CreateItemRequest } from './infrastructure/request/create-item-request';
import { ClientProxy } from '@nestjs/microservices';
import { ItemReceivedRequest } from 'src/items_received/request/item-received-request';

@Injectable()
export class ItemsService {

  constructor(
    @InjectRepository(Item, 'nest') private itemRepository: Repository<Item>,
    @Inject('CAT_SERVICE') private client: ClientProxy
  ) {}

  async create(createItemDto: CreateItemRequest) {
    const newItem = this.itemRepository.create({
      name: createItemDto.getName(),
      status: createItemDto.getStatus()
    })
    const item = await this.itemRepository.save(newItem)
    return item
  }

  async itemReceived(itemReceived: ItemReceivedRequest) {
    this.client.emit('event', itemReceived)
  }

  findAll() {
    return this.itemRepository.find();
  }

  async findOne(id: number) {
    const item = await this.itemRepository.findOne({
      where: {
        id: id
      }
    });

    if (!item) {
      throw new HttpException("Item no existe", HttpStatus.NOT_FOUND)
    }

    return item
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.itemRepository.update({
      id: id
    }, updateItemDto);
  }

  remove(id: number) {
    return this.itemRepository.delete({
      id
    });
  }
}