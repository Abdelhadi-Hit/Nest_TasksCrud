// src/task/task.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task | undefined> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async create(taskData: Partial<Task>): Promise<Task> {
    const task = this.taskRepository.create(taskData);
    return this.taskRepository.save(task);
  }

  async update(id: number, taskData: Partial<Task>): Promise<Task | undefined> {
    await this.taskRepository.update(id, taskData);
    return this.taskRepository.findOne({where:{id}});
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
