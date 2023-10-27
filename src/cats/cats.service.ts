import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class CatsService {
    
    constructor(@Inject('CAT_SERVICE') private client: ClientProxy) {}

    async getCatName(name: string): Promise<Observable<any>> {
        return await this.client.send({cmd: 'cats'}, name)
    }
}
