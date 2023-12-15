import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./entities/category.entity";
import { CreateCategorieDto } from "./dto/create-categorie.dto";

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

  async findHierarchyByOne(id: number) {
    return await this.categoryRepository.query(
      `
      SELECT c1.*
      FROM categories c1
      JOIN categories c2 ON c1.category_id = c2.id
      WHERE c2.id = ${id}
      UNION
      SELECT c1.*
      FROM categories c1
      JOIN categories c2 ON c1.category_id = c2.id
      JOIN categories c3 ON c2.category_id = c3.id
      WHERE c3.id = ${id};
      `
    )
  }

  async create(createCategorieDto: CreateCategorieDto) {

    const parentCategory = createCategorieDto.parent ? await this.categoryRepository.findOne({
      where: {
        id: createCategorieDto.parent
      }
    }) : null;

    const newCategorie = this.categoryRepository.create({
      name: createCategorieDto.name,
      status: createCategorieDto.status,
      parent: parentCategory
    })
    
    const categorie = await this.categoryRepository.save(newCategorie)
    return categorie
  }
}