import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './students.type';
import { StudentsService } from './students.service';

@Resolver()
export class StudentsResolver {

    constructor(
        private studentService: StudentsService
    ) {}

    @Query(returns => [StudentType])
    students() {
        return this.studentService.students()
    }

    @Query(returns => StudentType)
    student(
        @Args('id') id: string
    ) {
        return this.studentService.student(id)
    }

    @Mutation(returns => StudentType)
    createStudent(
        @Args('name') name: string
    ) {
        return this.studentService.createStudent(name)
    }
}
