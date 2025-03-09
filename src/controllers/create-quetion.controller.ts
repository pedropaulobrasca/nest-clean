import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

// const createQuetionBodySchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6).max(255),
// })

// type CreateQuestionBodySchema = z.infer<typeof createQuetionBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  // @UsePipes(new ZodValidationPipe(createQuetionBodySchema))
  handle() {
    console.log('CreateQuestionController')
  }
}
