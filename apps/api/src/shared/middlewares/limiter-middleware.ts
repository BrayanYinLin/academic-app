import { RATE_LIMITER } from '@shared/config/constants'
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: RATE_LIMITER.WINDOW_TIME,
  limit: RATE_LIMITER.REQUEST_LIMIT,
  standardHeaders: true,
  legacyHeaders: false,
  ipv6Subnet: 56
})

export { limiter }
