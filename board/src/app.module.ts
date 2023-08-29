import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { BoardController } from './board/board.controller';
import { Board } from './board/board.entity';
import { BoardService } from './board/board.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0831',
      database: 'practice',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 개발 환경에서만 사용 (자동 테이블 생성)
    }),
    TypeOrmModule.forFeature([Board]),
  ],
  controllers: [AppController, BoardController],
  providers: [BoardService],
})
export class AppModule {}
