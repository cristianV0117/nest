import { join } from 'path';
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
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    ItemsModule,
    ItemsReceivedModule,
    CatsModule,
    TypeOrmModule.forRoot(databaseSource[0]),
    TypeOrmModule.forRoot(databaseSource[1]),
    MongooseModule.forRoot('mongodb://nest:nest@localhost:27017'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ]
    }),
    HelloWorldModule,
    LessonModule
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware)
    .exclude(
      { path: 'graphql', method: RequestMethod.ALL }
    )
    .forRoutes({
      path: '*',
      method: RequestMethod.ALL
    })
  }
}