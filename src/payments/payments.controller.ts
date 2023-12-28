import { Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Res } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {

    constructor(
        private paymentsService: PaymentsService
    ) {
        
    }

    @Post('')
    async createPayment(@Res() res) {
        this.paymentsService.createPayment(res)
    }

}
