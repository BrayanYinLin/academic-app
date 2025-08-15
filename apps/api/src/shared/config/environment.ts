import { join } from 'node:path'

const PATH_ENV = join(__dirname, '../../../../../.env')
process.loadEnvFile(PATH_ENV)

export const env_website = join(__dirname, '../../../../client/dist')

console.log(env_website)

export const {
  PGDATABASE: env_db,
  PGUSER: env_user_db,
  PGPASSWORD: env_password_db,
  PGHOST: env_host_db,
  PGPORT: env_port_db = 5432,
  PORT_APPLICATION: env_port_app = 3000,
  BCRYPT_SALT_ROUNDS: env_salts_rounds,
  JWT_SECRET: env_jwt_secret,
  NODE_ENV: env_node_env
} = process.env
