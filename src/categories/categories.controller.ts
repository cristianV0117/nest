import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Inject } from '@nestjs/common';
import { CategoriesService } from "./categories.service";
import { Category } from "./entities/category.entity";
import { CreateCategorieDto } from './dto/create-categorie.dto';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoryService: CategoriesService
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(+id);
  }

  @Get('/tree/:id')
  findHierarchyByOne(@Param('id') id: string) {
    return this.categoryService.findHierarchyByOne(+id)
  }

  @Post()
  createCategorie(@Body() createCategorie: CreateCategorieDto) {
    return this.categoryService.create(createCategorie)
  }
}