import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['user1', 'user2', 'user3'];
  }

  @Get()
  findOne(): string {
    return 'Find one user';
  }

  @Post()
  create(): string {
    return 'Create new user';
  }

  @Patch()
  update(): string {
    return 'Update user';
  }

  @Delete()
  remove(): string {
    return 'Remove user';
  }
}
