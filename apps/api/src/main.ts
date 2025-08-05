import express, { Request, Response } from 'express'
import swaggerUI from 'swagger-ui-express'
import { join } from 'node:path'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import { swaggerDocs } from './shared/docs/parse-docs'

const app = express()
const env_website = join(__dirname, '../../client/dist')

app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(express.static(env_website))
app.use(cookieParser())
app.use(passport.initialize())
app.disable('x-powered-by')

app.get('/{*splat}', (_: Request, res: Response) => {
  return res.sendFile('index.html', { root: env_website })
})

export { app }
