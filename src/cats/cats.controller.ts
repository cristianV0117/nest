import { Controller, Post, Body, Logger} from '@nestjs/common';
import { Cat } from './dto/cat.dto';
import { CatsService } from './cats.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('cats')
export class CatsController {

    constructor(private readonly appService: CatsService) {}

    @MessagePattern({cmd: 'cats'})
    async getCatName(name: string): Promise<string> {
        return 'cat name: ' + name
    }

    @Post()
    async sendCatData(@Body() catDto: Cat) {
        return await this.appService.getCatName(catDto.name)
    }
}