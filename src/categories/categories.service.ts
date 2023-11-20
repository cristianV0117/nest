import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./entities/category.entity";

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category, 'nest') private categoryRepository: Repository<Category>
  ) {}

  async findOne(id: number) {
    return await this.categoryRepository.findOne({
      where: {
        id: id
      },
      relations: ['children', 'parent']
    });
  }
}