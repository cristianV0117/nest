import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

@Schema({
    timestamps: true,
    collection: 'categories'
})
export class Category {

    @Prop()
    uuid: string

    @Prop()
    name: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)