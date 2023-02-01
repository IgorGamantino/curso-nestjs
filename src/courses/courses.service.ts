import { Injectable } from '@nestjs/common';
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
    return this.courses.find((course) => course.id === +id);
  }

  create(course: Course) {
    this.courses.push(course);
  }

  update(id: string, course: Course) {
    const index = this.courses.findIndex((course) => course.id === +id);
    this.courses[index] = course;
  }

  delete(id: string) {
    const index = this.courses.findIndex((course) => course.id === +id);
    if (index >= 0) this.courses.splice(index, 1);
  }
}
