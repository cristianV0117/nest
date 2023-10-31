import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemsRepositoryInterface } from "src/items/domain/contracts/items-repository.interface";
import { Item } from "src/items/domain/Item";
import { Repository } from "typeorm";

@Injectable()
export class ItemsOrmRepository implements ItemsRepositoryInterface {
    
    constructor(
        @InjectRepository(Item, 'nest') private itemRepository: Repository<Item>,
    ) {}
    
    async index(): Promise<Item> {
        const promise = await this.itemRepository.find()
        return new Item(Array.from(promise))
    }
}