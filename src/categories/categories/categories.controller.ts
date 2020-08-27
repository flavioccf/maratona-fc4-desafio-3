import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from '../category.entity';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService){}
    @Get()
    index(): Promise<Category[]> {
        return this.categoriesService.findAll();
    }
    @Post()
    async create(@Body() categoryData: Category): Promise<any> {
      return this.categoriesService.create(categoryData);
    }
    @Put(':id/update')
    async update(@Param('id') id, @Body() categoryData: Category): Promise<any> {
        categoryData.id = Number(id);
        console.log('Update #' + categoryData.id)
        return this.categoriesService.update(categoryData);
    } 
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.categoriesService.delete(id);
    }    
}
