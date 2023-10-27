import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CatsModule } from './cats/cats.module';
import { ItemsReceivedModule } from './items_received/items_received.module';
import { Item } from './items/entities/item.entity';
import { ItemsReceived } from './items_received/entities/items_received.entity';

@Module({
  imports: [
    ItemsModule,
    ItemsReceivedModule,
    CatsModule,
    TypeOrmModule.forRoot({
      name: 'nest',
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      port: 3306,
      database: 'nest',
      //entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [Item],
      synchronize: true
    }),
    TypeOrmModule.forRoot({
      name: 'nestdocker',
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'nestdocker',
      port: 3307,
      database: 'nestdocker',
      //entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [ItemsReceived],
      synchronize: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
