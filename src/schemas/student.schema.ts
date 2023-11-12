import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Student {
    @Prop()
    name: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student)