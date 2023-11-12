import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Lesson } from 'src/schemas/lesson.schema';

@Injectable()
export class LessonService {
    
    constructor(
        @InjectModel(Lesson.name) private lessonModel: Model<Lesson>
    ) {}

    async lessons(): Promise<Lesson[]> {
        return this.lessonModel.find().populate('students')
    }

    async getLesson(id: string): Promise<Lesson> {
        return this.lessonModel.findOne({ _id: id })
    }

    async createLesson(name: string, startDate: string, endDate: string): Promise<Lesson> {

        const newLesson = await this.lessonModel.create({
            name,
            startDate,
            endDate 
        })

        return newLesson.save()
    }

    async assignStudentToLesson(
        lessonId: string,
        studentsIds: string[]
    ): Promise<Lesson> {
        const lesson = await this.lessonModel.findOne({ _id: lessonId })
        lesson.students = [...lesson.students, ...studentsIds]
        return (await lesson.save()).populate('students')
    }
}
