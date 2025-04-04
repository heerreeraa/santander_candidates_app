import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CandidateService } from './candidate.service';

@Controller('candidates')
export class AppController {
 constructor(private readonly candidateService: CandidateService) {}
 
   @Post()
   @UseInterceptors(FileInterceptor('file'))
   uploadCandidate(
     @Body() body: { name: string; surname: string },
     @UploadedFile() file: any,
   ) {
     return this.candidateService.processFile(body, file);
   }
 
   @Get()
   getAllCandidates() {
     return this.candidateService.getCandidates();
   }
}
