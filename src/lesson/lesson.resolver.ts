import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver(() => LessonType)
export class LessonResolver {

    constructor(
        private lessonService: LessonService
    ) {}

    @Query(() => [LessonType])
    lessons() {
        return this.lessonService.lessons();
    }
    
    @Query(() => LessonType)
    lesson(
        @Args('id') id: string
    ) {
        return this.lessonService.getLesson(id)
    }

    @Mutation(() => LessonType)
    createLesson(
        @Args('name') name: string,
        @Args('startDate') startDate: string,
        @Args('endDate') endDate: string
    ) {
        return this.lessonService.createLesson(name, startDate, endDate)
    }

    @Mutation(() => LessonType)
    assignStudentsToLesson(
        @Args('lessonId') lessonId: string,
        @Args('studentsIds', { type: () => [String] }) studentsIds: string[]
    ) {
        return this.lessonService.assignStudentToLesson(lessonId, studentsIds)
    }
}
