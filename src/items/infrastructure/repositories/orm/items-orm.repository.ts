import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemsRepositoryInterface } from "src/items/domain/contracts/items-repository.interface";
import { Item } from "src/items/entities/item.entity";
import { Repository } from "typeorm";

@Injectable()
export class ItemsOrmRepository implements ItemsRepositoryInterface {
    
    constructor(
        @InjectRepository(Item, 'nest') private itemRepository: Repository<Item>,
    ) {}
    
    index() {
        return this.itemRepository.find();
    }
}