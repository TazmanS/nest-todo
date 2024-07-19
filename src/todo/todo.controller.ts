import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './schemas/todo.schema';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos() {
    console.log(123123);
    return this.todoService.getTodos();
  }

  @Post()
  createTodo(@Body() createTodo: TodoDto): Promise<Todo> {
    return this.todoService.createTodo(createTodo);
  }
}
