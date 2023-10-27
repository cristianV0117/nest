import { Test, TestingModule } from '@nestjs/testing';
import { ItemsReceivedService } from './items_received.service';

describe('ItemsReceivedService', () => {
  let service: ItemsReceivedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsReceivedService],
    }).compile();

    service = module.get<ItemsReceivedService>(ItemsReceivedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
