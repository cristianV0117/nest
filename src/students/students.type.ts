import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Student')
export class StudentType {
    @Field(type => ID)
    _id: string;

    @Field()
    name: string;
}