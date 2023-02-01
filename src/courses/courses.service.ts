import { HttpException, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateCourseDto } from './dto/create.course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: '1',
      name: 'NestJS Course 1',
      description: 'NestJS with TypeScript',
      tags: ['nestjs', 'nodejs', 'TypeScript'],
    },
  ];

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: string): Course {
    const courseExists = this.courses.find((course) => course.id === id);

    if (!courseExists) throw new HttpException('Course not found', 404);

    return courseExists;
  }

  create(course: CreateCourseDto) {
    const newCourse = {
      id: randomUUID(),
      ...course,
    };

    console.log(newCourse);

    this.courses.push(newCourse);
  }

  update(id: string, course: UpdateCourseDto) {
    const index = this.courses.findIndex((course) => course.id === id);

    if (index < 0) throw new HttpException('Course not found', 404);

    this.courses[index] = {
      id,
      description: course.description || this.courses[index].description,
      name: course.name || this.courses[index].name,
      tags: course.tags || this.courses[index].tags,
    };
  }

  delete(id: string) {
    const index = this.courses.findIndex((course) => course.id === id);

    if (index < 0) throw new HttpException('Course not found', 404);

    this.courses.splice(index, 1);
  }
}
