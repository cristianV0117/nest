import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { WebSocketServer } from '@nestjs/websockets';
import { ChatGateway } from 'src/chat/chat.gateway';

@Injectable()
export class CronService {

  constructor(private readonly appGateway: ChatGateway) {}

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    this.appGateway.server.emit('message', { data: "ITEM CREADO: " +  this.makeid(10)})
  }

  private makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
  }
}