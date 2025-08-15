import { roleResponseDto } from '@roles/entities/dtos/role.dto'
import { z } from 'zod'

const CreateUserSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
  email: z.email(),
  dni: z.string().length(8).regex(/^\d+$/, 'DNI must be numbers')
})

const LoginSchema = z.object({
  username: z.string(),
  password: z.string()
})

export const userResponseDto = z.object({
  id: z.uuid(),
  username: z.string(),
  email: z.string().email(),
  dni: z.string().length(8),
  role: roleResponseDto,
  state: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
})

type UserResponseDto = z.infer<typeof userResponseDto>
type LoginDto = z.infer<typeof LoginSchema>
type CreateUserDto = z.infer<typeof CreateUserSchema>

export {
  LoginDto,
  LoginSchema,
  CreateUserSchema,
  CreateUserDto,
  UserResponseDto
}
