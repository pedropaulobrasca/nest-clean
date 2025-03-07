import { Controller, Post } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

// const createAccountBodySchema = z.object({
//   name: z.string().min(2).max(255),
//   email: z.string().email(),
//   password: z.string().min(6).max(255),
// })

// type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/sessions')
export class AuthenticateController {
  constructor(private jwt: JwtService) {}

  @Post()
  // @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  handle() {
    const token = this.jwt.sign({ sub: 'user-id' })

    return {
      token,
    }
  }
}
