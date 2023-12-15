import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';
import { ChatDto } from './dto/chat.dto';
import { User } from 'src/users/entities/user.entity';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {

  constructor(
    @InjectRepository(Chat, 'nest') private chatRepository: Repository<Chat>,
    @InjectRepository(User, 'nest') private userRepository: Repository<User>,
    private readonly appGateway: ChatGateway
  ) {}

  async create(chat: ChatDto) {

    const transmitter = await this.userRepository.findOne({
      where: {
        uuid: chat.transmitter
      }
    })

    const receiver = await this.userRepository.findOne({
      where: {
        uuid: chat.receiver
      }
    })

    const createChat = this.chatRepository.create({
      uuid: chat.uuid,
      content: chat.content,
      transmitter: transmitter,
      receiver: receiver
    })

    const chatCreated = await this.chatRepository.save(createChat)

    this.appGateway.server.emit(`${chat.uuid}-${chat.receiver}`, {
      from: transmitter.name,
      content: chatCreated.content
    })

    return chatCreated
  }
}