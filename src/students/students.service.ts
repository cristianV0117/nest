import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from 'src/schemas/student.schema';

@Injectable()
export class StudentsService {

    constructor(
        @InjectModel(Student.name) private studentModel: Model<Student>
    ) {}

    async students(): Promise<Student[]> {
        return this.studentModel.find()
    }

    async student(id: string): Promise<Student> {
        return this.studentModel.findOne({ _id: id })
    }

    async createStudent(name: string): Promise<Student> {
        const student = await this.studentModel.create({
            name
        })

        return student.save()
    }

}
