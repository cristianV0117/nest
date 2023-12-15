import { Controller, Get, Post, Body } from '@nestjs/common'
import { ChatDto } from './dto/chat.dto';
import { ChatService } from './chat.service';
import { Chat } from './entities/chat.entity';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService
  ) {}

  @Post()
  async create(@Body() chat: ChatDto): Promise<Chat> {
    return this.chatService.create(chat)
  }
}