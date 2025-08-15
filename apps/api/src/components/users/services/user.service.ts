import { Role } from '@roles/entities/role.entity'
import { ROLES } from '@roles/lib/constants'
import { ERROR_HTTP_CODES, ERROR_NAMES } from '@shared/config/constants'
import { AppDataSource } from '@shared/database/data-source'
import { AppError } from '@shared/utils/error-factory'
import {
  LoginDto,
  UserResponseDto,
  CreateUserDto,
  userResponseDto
} from '@users/entities/dtos/user.dtos'
import { User } from '@users/entities/user.entity'
import { UserService } from '@users/user'

class UserServiceImpl implements UserService {
  constructor(
    private readonly repository = AppDataSource.getRepository(User),
    private readonly roleRepository = AppDataSource.getRepository(Role)
  ) {}

  async findByUsernameAndPassword({
    username,
    password
  }: LoginDto): Promise<UserResponseDto> {
    const user = await this.repository.findOne({
      where: {
        username,
        password
      }
    })

    if (!user) {
      throw new AppError({
        code: ERROR_NAMES.NOT_FOUND,
        httpCode: ERROR_HTTP_CODES.NOT_FOUND,
        message: 'User not found',
        isOperational: true
      })
    }

    const { data, success, error } = userResponseDto.safeParse(user)

    if (!data || !success || error) {
      throw new AppError({
        code: ERROR_NAMES.VALIDATION,
        httpCode: ERROR_HTTP_CODES.VALIDATION,
        message: 'User response could not be validated',
        isOperational: true
      })
    }

    return data
  }

  async createStudent({
    username,
    password,
    dni,
    email
  }: CreateUserDto): Promise<UserResponseDto> {
    const student = await this.roleRepository.findOne({
      where: {
        name: ROLES.STUDENT
      }
    })

    if (!student) {
      throw new AppError({
        code: ERROR_NAMES.NOT_FOUND,
        httpCode: ERROR_HTTP_CODES.NOT_FOUND,
        message: 'Role not found',
        isOperational: true
      })
    }

    const preUser = this.repository.create({
      username,
      password,
      dni,
      email
    })

    const createdUser = this.repository.save(preUser)

    const { data, success, error } = userResponseDto.safeParse(createdUser)

    if (!data || !success || error) {
      throw new AppError({
        code: ERROR_NAMES.VALIDATION,
        httpCode: ERROR_HTTP_CODES.VALIDATION,
        message: 'User response could not be validated',
        isOperational: true
      })
    }

    return data
  }
}

export { UserServiceImpl }
