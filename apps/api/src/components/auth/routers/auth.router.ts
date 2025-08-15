import { Router } from 'express'
import { AuthController } from '../auth'
import { AuthCtrl } from '../controllers/auth.controller'

const createAuthRouter = (controller: AuthController) => {
  const router = Router()

  router.post('/signin', controller.signin.bind(controller))
  router.post('/signup', controller.signupStudent.bind(controller))
  router.get('/logout', controller.logout.bind(controller))

  return router
}

const controller = new AuthCtrl()
const authRouter = createAuthRouter(controller)

export { authRouter }
