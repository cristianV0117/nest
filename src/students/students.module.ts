import { Module } from '@nestjs/common';
import { StudentsResolver } from './students.resolver';
import { StudentsService } from './students.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from 'src/schemas/student.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Student.name,
                schema: StudentSchema
            }
        ])
    ],
    providers: [StudentsResolver, StudentsService]
})
export class StudentsModule {}
