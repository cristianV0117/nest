import { Field, ID, ObjectType } from "@nestjs/graphql";
import { type } from "os";
import { StudentType } from "src/students/students.type";

@ObjectType('Lesson')
export class LessonType {
    @Field(type => ID)
    _id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;

    @Field(type => [StudentType])
    students: StudentType[];
}