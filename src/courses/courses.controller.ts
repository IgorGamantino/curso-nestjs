import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
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
