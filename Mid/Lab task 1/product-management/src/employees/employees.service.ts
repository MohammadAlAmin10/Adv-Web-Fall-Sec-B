import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity.js';
import { CreateEmployeeDto } from './dto/create-employee.dto.js';
import { UpdateEmployeeDto } from './dto/update-employee.dto.js';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}

  // CREATE
  create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeesRepository.create(createEmployeeDto);
    return this.employeesRepository.save(employee);
  }

  // READ ALL
  findAll() {
    return this.employeesRepository.find({ order: { id: 'ASC' } });
  }

  // READ ONE
  async findOne(id: number) {
    const employee = await this.employeesRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }

  // UPDATE
  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    await this.findOne(id); // stops with 404 if the employee does not exist
    await this.employeesRepository.update(id, updateEmployeeDto);
    return this.findOne(id);
  }

  // DELETE
  async remove(id: number) {
    await this.findOne(id); // stops with 404 if the employee does not exist
    await this.employeesRepository.delete(id);
    return { message: `Employee with id ${id} deleted successfully` };
  }
}
