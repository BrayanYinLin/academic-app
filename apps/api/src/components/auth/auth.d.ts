import { CreateUserDto, LoginDto } from '@users/entities/dtos/user.dtos'
import { Request, Response, NextFunction } from 'express'

interface AuthenticationTokens {
  access_token: string
  refresh_token: string
}

interface AuthService {
  signIn(user: LoginDto): Promise<AuthenticationTokens>
  signUpStudent(user: CreateUserDto): Promise<AuthenticationTokens>
}

interface AuthController {
  signin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Reponse | void>
  signupStudent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Reponse | void>
  logout(req: Request, res: Response): Promise<Reponse | void>
}

export { AuthService, AuthController, AuthenticationTokens }
