import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

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
}

export const ItemSchema = SchemaFactory.createForClass(Item)