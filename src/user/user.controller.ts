import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findAllUsers(): string[] {
    return ['user1', 'user2', 'user3'];
  }

  @Post()
  CreateUser(): string {
    return 'Create new user';
  }
}
