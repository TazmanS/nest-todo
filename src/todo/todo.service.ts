import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  getTodos(): Promise<Todo[]> {
    return this.todoModel.find();
  }

  createTodo(createTodo: TodoDto): Promise<Todo> {
    const newTodo = new this.todoModel(createTodo);
    return newTodo.save();
  }
}
