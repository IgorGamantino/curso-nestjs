import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Get('list')
  findAll(): string {
    return 'This action returns all courses';
  }

  @Get('list/:id')
  findOne(@Param('id') id: string): string {
    return `return course with id: ${id}`;
  }

  @Post('list')
  create(@Body() body): Body {
    return body;
  }
}
