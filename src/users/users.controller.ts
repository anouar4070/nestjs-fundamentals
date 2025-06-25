import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dtos/createUser.dto';

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
  create(@Body() userData: CreateUserDto) {
    return userData;
  }

  @Patch(':username')
  update(@Param('username') username: string, @Body() input) {
    return input;
  }

  @Delete(':username')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('username') username: string) {}
}
