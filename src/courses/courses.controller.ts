import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create.course.dto';

import { Course } from './entities/course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Get('list')
  findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get('list/:id')
  findOne(@Param('id') id: string): Promise<Course> {
    return this.coursesService.findOne(id);
  }

  @Post('list')
  create(@Body() createCourseDto: CreateCourseDto): Promise<void> {
    return this.coursesService.create(createCourseDto);
  }

  @Patch('list/:id')
  update(@Param('id') id: string, @Body() body): Promise<void> {
    return this.coursesService.update(id, body);
  }

  @Delete('list/:id')
  delete(@Param('id') id: string): Promise<void> {
    return this.coursesService.delete(id);
  }
}
