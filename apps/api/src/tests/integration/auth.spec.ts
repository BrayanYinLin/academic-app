import { describe, it, expect, beforeAll } from 'vitest'
import { app } from '@root/main'
import request from 'supertest'
import { faker } from '@faker-js/faker'
import { AppDataSource } from '@shared/database/data-source'
import { createRoles } from '@roles/lib/roles.seed'

const mockUser = {
  username: faker.internet.username(),
  password: faker.internet.password({ length: 10 }),
  email: faker.internet.email(),
  dni: faker.string.numeric(8)
}

describe('Authentication tests', async () => {
  const agent = request.agent(app)

  beforeAll(async () => {
    await AppDataSource.initialize()
    await createRoles()
  })

  it('should signup a new user', async () => {
    const response = await agent.post('/api/v1/auth/signup').send(mockUser)

    expect(response.status).toBe(201)
  })

  it('should signin as user', async () => {
    const response = await request(app).post('/api/v1/auth/signin').send({
      username: mockUser.username,
      password: mockUser.password
    })

    expect(response.status).toBe(301)
  })

  it('should logout user', async () => {
    const response = await request(app).get('/api/v1/auth/logout')

    expect(response.status).toBe(200)
  })
})
