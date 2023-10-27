import { CreateItemDto } from "../dto/create-item.dto";
import { HttpException, HttpStatus } from '@nestjs/common';

export class CreateItemRequest {

    private name: string
    private status: number

    constructor(createItemDto: CreateItemDto) {
        this.name = createItemDto.name
        this.status = createItemDto.status
        this.ensureStatusEqualOne()
    }

    ensureStatusEqualOne() {
        if (this.status != 1) {
            throw new HttpException('El status debe ser 1 o 0', HttpStatus.BAD_REQUEST)
        }
        return true
    }

    getName(): string {
        return this.name
    }

    getStatus(): number {
        return this.status
    }
}