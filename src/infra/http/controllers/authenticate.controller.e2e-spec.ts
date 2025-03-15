import { PrismaService } from '@/infra/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { hash } from 'bcryptjs'
import request from 'supertest'
import type { Server } from 'http'
import { AppModule } from '@/infra/app.module'

interface ResponseAuthenticateBody {
  access_token: string
}

describe('Authenticate (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    prisma = moduleRef.get(PrismaService)

    await app.init()
  })

  test('[POST] /sessions', async () => {
    await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: await hash('123asd', 8),
      },
    })

    const httpServer = app.getHttpServer() as Server
    const response = await request(httpServer).post('/sessions').send({
      email: 'johndoe@example.com',
      password: '123asd',
    })

    expect(response.statusCode).toBe(201)

    // Verificar a estrutura da resposta

    const responseBody = response.body as ResponseAuthenticateBody

    expect(responseBody).toHaveProperty('access_token')
    expect(typeof responseBody.access_token).toBe('string')
  })
})
