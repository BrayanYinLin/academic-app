import { ERROR_HTTP_CODES, ERROR_NAMES } from '@shared/config/constants'
import { env_jwt_secret } from '@shared/config/environment'
import { AppError } from '@shared/utils/error-factory'
import { randomUUID } from 'node:crypto'
import { User } from '@users/entities/user.entity'
import { sign } from 'jsonwebtoken'

type TokenPayload = Pick<User, 'id' | 'role'>

const createAuthenticationTokens = (payload: TokenPayload) => {
  if (!env_jwt_secret) {
    throw new AppError({
      code: ERROR_NAMES.INTERNAL,
      httpCode: ERROR_HTTP_CODES.INTERNAL,
      message: 'Missing environment variables',
      isOperational: false
    })
  }

  const accessPayload = {
    sub: payload.id,
    role: payload.role
  }

  const accessToken = sign(accessPayload, env_jwt_secret, {
    algorithm: 'HS256',
    expiresIn: '10h'
  })

  const refreshPayload = {
    jti: randomUUID(),
    sub: payload.id
  }

  const refreshToken = sign(refreshPayload, env_jwt_secret, {
    algorithm: 'HS256',
    expiresIn: '10h'
  })

  return {
    access_token: accessToken,
    refresh_token: refreshToken
  }
}

export { createAuthenticationTokens }
