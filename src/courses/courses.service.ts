import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create.course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private courseRepository: Repository<Course>,
  ) { }

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find();
  }

  async findOne(id: string): Promise<Course> {
    const courseExists = await this.courseRepository.findOneBy({ id });

    if (!courseExists) throw new HttpException('Course not found', 404);

    return courseExists;
  }

  async create(course: CreateCourseDto) {
    const newCourse = {
      id: randomUUID(),
      ...course,
    };

    await this.courseRepository.save(newCourse);
  }

  async update(id: string, course: UpdateCourseDto) {
    const courseExists = await this.courseRepository.findOneBy({ id });

    if (!courseExists) throw new HttpException('Course not found', 404);

    const updateCourse = {
      id,
      description: course.description || courseExists.description,
      name: course.name || courseExists.name,
      tags: course.tags || courseExists.tags,
    };

    await this.courseRepository.update(id, updateCourse);
  }

  async delete(id: string) {
    const index = await this.courseRepository.findOneBy({ id });
    if (index) throw new HttpException('Course not found', 404);

    await this.courseRepository.delete(id);
  }
}
