import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CatsModule } from './cats/cats.module';
import { ItemsReceivedModule } from './items_received/items_received.module';
import { ChatGateway } from './chat/chat.gateway';
import { databaseSource } from './database_source';
import { ApiKeyMiddleware } from './middleware/api-key.middleware';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ItemsModule,
    ItemsReceivedModule,
    CatsModule,
    TypeOrmModule.forRoot(databaseSource[0]),
    TypeOrmModule.forRoot(databaseSource[1]),
    MongooseModule.forRoot('mongodb://nest:nest@mongo:27017')
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL
    })
  }
}