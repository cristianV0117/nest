import { Controller, Get} from '@nestjs/common';
import { ItemIndexUseCase } from 'src/items/application/get/item-index.usecase';

@Controller('ddd')
export class ItemIndexController {
  constructor(
    private readonly useCase: ItemIndexUseCase
  ) {}

  @Get()
  index() {
    return this.useCase.index();
  }
}