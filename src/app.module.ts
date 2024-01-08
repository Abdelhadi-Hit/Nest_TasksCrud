import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/task.entity';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    // Copy the configuration from ormconfig.js
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '*******',
    database: 'Nest_TasksCrud',
    entities: [Task],
    synchronize: false
  }), TypeOrmModule.forFeature([Task])],
  controllers: [AppController,TaskController],
  providers: [AppService,TaskService],
})
export class AppModule {}
