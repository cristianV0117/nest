import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { Types } from "mongoose";

@Schema({
    timestamps: true
})
export class Item {
    @Prop({
        unique: true
    })
    uuid: string;

    @Prop({
        trim: true
    })
    name: string;

    @Prop({
        default: 1
    })
    status: number;

    @Prop({
        type: {},
        default: null
    })
    address: {
        kr: string,
        cll: string,
        no: string
        postal_code: number
    };

    @Prop()
    colors: []

    @Prop({
        type: Types.ObjectId,
        ref: 'Category'
    })
    category: Types.ObjectId
}

export const ItemSchema = SchemaFactory.createForClass(Item)