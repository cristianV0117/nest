import { PartialType } from '@nestjs/mapped-types';
import { CreateItemsReceivedDto } from './create-items_received.dto';

export class UpdateItemsReceivedDto extends PartialType(CreateItemsReceivedDto) {}
