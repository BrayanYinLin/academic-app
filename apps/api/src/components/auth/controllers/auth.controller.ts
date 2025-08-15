import { Request, Response, NextFunction } from 'express'
import { AuthController } from '../auth'
import { AuthServiceImpl } from '../services/auth.service'
import { setAuthCookies } from '../utils/set-auth-cookies'

class AuthCtrl implements AuthController {
  constructor(private readonly service = new AuthServiceImpl()) {}

  async signin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { access_token, refresh_token } = await this.service.signIn(
        req.body
      )

      return setAuthCookies(res, access_token, refresh_token).redirect(
        301,
        '/home'
      )
    } catch (e) {
      next(e)
    }
  }

  async signupStudent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { access_token, refresh_token } = await this.service.signUpStudent(
        req.body
      )

      return setAuthCookies(res, access_token, refresh_token)
        .status(201)
        .json({ message: 'User created' })
    } catch (e) {
      next(e)
    }
  }

  async logout(_: Request, res: Response): Promise<Response | void> {
    return res
      .clearCookie('access_token')
      .clearCookie('refresh_token')
      .status(200)
      .json({ message: 'logout success' })
  }
}

export { AuthCtrl }
