import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonSchema } from 'src/schemas/lesson.schema';
import { LessonService } from './lesson.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Lesson.name,
        schema: LessonSchema
      }
    ])
  ],
  providers: [LessonResolver, LessonService]
})
export class LessonModule {}
