import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  // CREATE
  create(createProductDto: CreateProductDto) {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  // READ ALL
  findAll() {
    return this.productsRepository.find({ order: { id: 'ASC' } });
  }

  // READ ONE
  async findOne(id: number) {
    const product = await this.productsRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  // UPDATE
  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id); // stops with 404 if the product does not exist
    await this.productsRepository.update(id, updateProductDto);
    return this.findOne(id);
  }

  // DELETE
  async remove(id: number) {
    await this.findOne(id); // stops with 404 if the product does not exist
    await this.productsRepository.delete(id);
    return { message: `Product with id ${id} deleted successfully` };
  }
}
