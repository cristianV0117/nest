import { Item } from './items/entities/item.entity';
import { ItemsReceived } from './items_received/entities/items_received.entity';
import 'dotenv/config'
import { Category } from "./categories/entities/category.entity";

const databaseSource: { [key: string]: any }[] = [
    {
        name: process.env.NEST_DATABASE_CONNECTION,
        type: 'mysql',
        host: process.env.NEST_DATABASE_HOST,
        username: process.env.NEST_DATABASE_USER,
        password: process.env.NEST_DATABASE_PASSWORD,
        port: 3306,
        database: process.env.NEST_DATABASE_DB,
        //entities: [__dirname + '/**/*.entity{.ts,.js}'],
        entities: [Item, Category],
        synchronize: true
    },
    {
        name: process.env.NESTDOCKER_DATABASE_CONNECTION,
        type: 'mysql',
        host: process.env.NESTDOCKER_DATABASE_HOST,
        username: process.env.NESTDOCKER_DATABASE_USER,
        password: process.env.NESTDOCKER_DATABASE_PASSWORD,
        port: 3307,
        database: process.env.NESTDOCKER_DATABASE_DB,
        //entities: [__dirname + '/**/*.entity{.ts,.js}'],
        entities: [ItemsReceived],
        synchronize: true
    }
]
export { databaseSource }