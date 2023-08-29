import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board as BoardEntity } from './board.entity';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getHello(): string {
    return 'Welcome Boards';
  }

  @Get('list')
  findAll(): Promise<BoardEntity[]> {
    return this.boardService.findAll();
  }

  @Post()
  create(@Body() post: BoardEntity): Promise<BoardEntity> {
    return this.boardService.create(post);
  }

  // Update and delete methods here
}
