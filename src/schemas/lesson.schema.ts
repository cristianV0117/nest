import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Lesson {
    @Prop()
    name: string;

    @Prop()
    startDate: string;

    @Prop()
    endDate: string;

    @Prop({
        type: [
            { 
                type: Types.ObjectId, 
                ref: 'Student'
            }
        ]
    })
    students: string[]
}

export const LessonSchema = SchemaFactory.createForClass(Lesson)