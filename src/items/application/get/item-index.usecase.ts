import { Item } from "src/items/domain/Item";
import { ItemsRepositoryInterface } from "src/items/domain/contracts/items-repository.interface";

export class ItemIndexUseCase {

    private readonly repository: ItemsRepositoryInterface

    constructor(repository: ItemsRepositoryInterface) {
        this.repository = repository
    }

    index() {
        return this.repository.index()
    }
}