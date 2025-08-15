import express, { Request, Response } from 'express'
import swaggerUI from 'swagger-ui-express'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import { swaggerDocs } from './shared/docs/parse-docs'
import helmet from 'helmet'
import { limiter } from '@shared/middlewares/limiter-middleware'
import { env_website } from '@shared/config/environment'
import cors from 'cors'
import { middlewareError } from '@shared/middlewares/error-middleware'
import { authRouter } from './components/auth/routers/auth.router'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(express.static(env_website))
app.use(passport.initialize())
app.use(helmet())
app.use(limiter)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use('/api/v1/auth', authRouter)
app.use(middlewareError)

app.get('/{*splat}', (_: Request, res: Response) => {
  return res.sendFile('index.html', { root: env_website })
})

export { app }
