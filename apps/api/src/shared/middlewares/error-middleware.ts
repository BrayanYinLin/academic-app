import { handleError } from '@shared/utils/error-handler'
import { Request, Response } from 'express'

export const middlewareError = async (
  err: Error,
  req: Request,
  res: Response
) => {
  await handleError(err, req, res)
}
