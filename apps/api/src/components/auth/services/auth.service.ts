import {
  LoginDto,
  CreateUserDto,
  LoginSchema
} from '@users/entities/dtos/user.dtos'
import { AuthenticationTokens, AuthService } from '../auth'
import { AppDataSource } from '@shared/database/data-source'
import { User } from '@users/entities/user.entity'
import { AppError } from '@shared/utils/error-factory'
import { ERROR_HTTP_CODES, ERROR_NAMES } from '@shared/config/constants'
import { createAuthenticationTokens } from '../utils/create-tokens'
import { compare, hash } from 'bcrypt'
import { env_salts_rounds } from '@shared/config/environment'

class AuthServiceImpl implements AuthService {
  constructor(
    private readonly repository = AppDataSource.getRepository(User)
  ) {}

  async signIn({
    username,
    password
  }: LoginDto): Promise<AuthenticationTokens> {
    const { success, data, error } = LoginSchema.safeParse({
      username,
      password
    })

    if (!success || !data) {
      throw new AppError({
        code: ERROR_NAMES.VALIDATION,
        httpCode: ERROR_HTTP_CODES.VALIDATION,
        message: 'Validation errors',
        isOperational: true,
        details: error
      })
    }

    const foundUser = await this.repository.findOne({
      where: {
        username
      }
    })

    if (!foundUser) {
      throw new AppError({
        code: ERROR_NAMES.NOT_FOUND,
        httpCode: ERROR_HTTP_CODES.NOT_FOUND,
        message: 'User not found',
        isOperational: true
      })
    }

    const isOk = await compare(password, foundUser.password)

    if (!isOk) {
      throw new AppError({
        code: ERROR_NAMES.AUTHENTICATION,
        httpCode: ERROR_HTTP_CODES.AUTHENTICATION,
        message: 'Bad credentials',
        isOperational: true
      })
    }

    const { access_token, refresh_token } =
      createAuthenticationTokens(foundUser)

    return { access_token, refresh_token }
  }

  async signUpStudent({
    username,
    email,
    dni,
    password
  }: CreateUserDto): Promise<AuthenticationTokens> {
    const foundUser = await this.repository.findOne({
      where: {
        username
      }
    })

    if (foundUser) {
      throw new AppError({
        code: ERROR_NAMES.CONFLICT,
        httpCode: ERROR_HTTP_CODES.CONFLICT,
        message: 'User in conflict',
        isOperational: true
      })
    }

    if (!env_salts_rounds) {
      throw new AppError({
        code: ERROR_NAMES.INTERNAL,
        httpCode: ERROR_HTTP_CODES.INTERNAL,
        message: 'Missing environment variables',
        isOperational: false
      })
    }

    const hashed = await hash(password, Number(env_salts_rounds))

    const user = this.repository.create({
      username,
      email,
      dni,
      password: hashed
    })

    const created = await this.repository.save(user)

    const { access_token, refresh_token } = createAuthenticationTokens(created)

    return { access_token, refresh_token }
  }
}

export { AuthServiceImpl }
