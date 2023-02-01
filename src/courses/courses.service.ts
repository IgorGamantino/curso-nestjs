import { HttpException, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NestJS Course 1',
      description: 'NestJS with TypeScript',
      tags: ['nestjs', 'nodejs', 'TypeScript'],
    },
  ];

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: string): Course {
    const courseExists = this.courses.find((course) => course.id === +id);

    if (!courseExists) throw new HttpException('Course not found', 404);

    return courseExists;
  }

  create(course: Course) {
    this.courses.push(course);
  }

  update(id: string, course: Course) {
    const index = this.courses.findIndex((course) => course.id === +id);

    if (index < 0) throw new HttpException('Course not found', 404);

    this.courses[index] = course;
  }

  delete(id: string) {
    const index = this.courses.findIndex((course) => course.id === +id);

    if (index < 0) throw new HttpException('Course not found', 404);

    this.courses.splice(index, 1);
  }
}
