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
import { Course } from './entities/course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Get('list')
  findAll(): Course[] {
    return this.coursesService.findAll();
  }

  @Get('list/:id')
  findOne(@Param('id') id: string): Course {
    return this.coursesService.findOne(id);
  }

  @Post('list')
  create(@Body() body): void {
    return this.coursesService.create(body);
  }

  @Patch('list/:id')
  update(@Param('id') id: string, @Body() body): void {
    return this.coursesService.update(id, body);
  }

  @Delete('list/:id')
  delete(@Param('id') id: string): void {
    return this.coursesService.delete(id);
  }
}
