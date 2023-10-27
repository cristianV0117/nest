import { Injectable } from '@nestjs/common';
import { ItemReceivedRequest } from './request/item-received-request';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemsReceived } from './entities/items_received.entity';

@Injectable()
export class ItemsReceivedService {
    constructor(@InjectRepository(ItemsReceived, 'nestdocker') private itemRepository: Repository<ItemsReceived>) {}

    async create(itemReceivedRequest: ItemReceivedRequest) {
        const newItem = this.itemRepository.create({
          name: itemReceivedRequest.name,
          status: itemReceivedRequest.status
        })
        const item = await this.itemRepository.save(newItem)
        console.log("Item recibido")
    }
}
