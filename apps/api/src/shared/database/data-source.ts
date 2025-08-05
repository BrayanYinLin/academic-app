import 'reflect-metadata'
import { DataSource } from 'typeorm'
import {
  env_db,
  env_host_db,
  env_password_db,
  env_port_db,
  env_user_db
} from '@shared/config/environment'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: env_host_db,
  port: Number(env_port_db),
  username: env_user_db,
  password: env_password_db,
  database: env_db,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: []
})
