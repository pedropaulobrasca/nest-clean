import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaAnswerAttachmentsRepository } from './prisma/prisma-answer-attachments-repository'
import { PrismaAnswerCommentsRepository } from './prisma/prisma-answer-comments-repository'
import { PrismaAnswersRepository } from './prisma/prisma-answer-repository'
import { PrismaQuestionAttachmentsRepository } from './prisma/prisma-question-attachments-repository'
import { PrismaQuestionCommentsRepository } from './prisma/prisma-question-comments-repository'
import { PrismaQuestionsRepository } from './prisma/prisma-questions-repository'

@Module({
  providers: [
    PrismaService,
    PrismaQuestionsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
  ],
  exports: [
    PrismaService,
    PrismaQuestionsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
  ],
})
export class DatabaseModule {}
