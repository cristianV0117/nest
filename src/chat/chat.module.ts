import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { Chat } from './entities/chat.entity';
import { User } from 'src/users/entities/user.entity';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([Chat, User], 'nest'),
  ],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway],
})
export class ChatModule {}