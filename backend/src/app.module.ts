import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  providers: [CandidateService],
})
export class AppModule {}
