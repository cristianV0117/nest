import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Inject } from '@nestjs/common';
import { CategoriesService } from "./categories.service";
import { Category } from "./entities/category.entity";

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoryService: CategoriesService
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(+id);
  }
}