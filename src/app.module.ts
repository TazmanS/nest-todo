import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tazmans123:RnUMOk0MPqNKgNQD@todo.rzan1o1.mongodb.net/?retryWrites=true&w=majority&appName=todo',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
