import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST || 'mysql',
      port: +process.env.MYSQL_PORT || 3306,
      username: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'password',
      database: process.env.MYSQL_DATABASE || 'todo_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
