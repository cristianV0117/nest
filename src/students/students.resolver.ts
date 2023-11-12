import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './students.type';
import { StudentsService } from './students.service';

@Resolver()
export class StudentsResolver {

    constructor(
        private studentService: StudentsService
    ) {}

    @Query(() => [StudentType])
    students() {
        return this.studentService.students()
    }

    @Query(() => StudentType)
    student(
        @Args('id') id: string
    ) {
        return this.studentService.student(id)
    }

    @Mutation(() => StudentType)
    createStudent(
        @Args('name') name: string
    ) {
        return this.studentService.createStudent(name)
    }
}
