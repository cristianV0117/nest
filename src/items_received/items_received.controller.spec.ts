import { Test, TestingModule } from '@nestjs/testing';
import { ItemsReceivedController } from './items_received.controller';
import { ItemsReceivedService } from './items_received.service';

describe('ItemsReceivedController', () => {
  let controller: ItemsReceivedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsReceivedController],
      providers: [ItemsReceivedService],
    }).compile();

    controller = module.get<ItemsReceivedController>(ItemsReceivedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
