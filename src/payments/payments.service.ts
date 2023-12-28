import { Injectable } from '@nestjs/common';
import {MercadoPagoConfig, Payment, Preference } from 'mercadopago'
import { Res } from '@nestjs/common';

@Injectable()
export class PaymentsService {

    private client = new MercadoPagoConfig({
        accessToken: "TEST-3301743988376849-121814-1e5c8b23de4f0ee7d6e05efe09849e33-1322054409"
    })

    async createPayment(@Res() res) {
        const body = {
            transaction_amount: 1000,
            payment_method_id: "pse",
            description: 'Product description',
            payer: {
                entity_type: 'individual',
                email: 'test_user_1884163098@testuser.com',
                identification: {
                    type: 'CC',
                    number: '11111111'
                }
            },
            items: [
                {
                    id: "713e4e31-1608-4a8d-8eb6-a545480a7f5c",
                    title: "portatil Lenovo",
                    quantity: 1,
                    unit_price: 10000,
                    currency_id: "COP"
                }
            ]
        }
        const preference = new Preference(this.client)
        const result = await preference.create({ body })
        const initPoint = result.init_point
        res.redirect(initPoint)
    }

}
