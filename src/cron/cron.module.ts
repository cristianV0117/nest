import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron.service';
import { ChatGateway } from 'src/chat/chat.gateway';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [CronService, ChatGateway],
})
export class CronModule {}