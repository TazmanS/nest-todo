import { Injectable } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  getTodos(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  createTodo(createTodo: TodoDto): Promise<Todo> {
    const newTodo = new Todo();
    newTodo.title = createTodo.title;
    newTodo.done = createTodo.done;
    return this.todoRepository.save(newTodo);
  }
}
