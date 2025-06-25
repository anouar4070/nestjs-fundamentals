import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['user1', 'user2', 'user3'];
  }

  @Get(':username')
  findOne(@Param('username') username: string): string {
    return username;
  }

  @Post()
  create(@Body() userData: any): any {
    console.log(userData);
    return userData;
  }

  @Patch(':username')
  update(@Param('username') username: string): string {
    return username;
  }

  @Delete(':username')
  remove(@Param('username') username: string): string {
    return username;
  }
}
