import 'reflect-metadata'
import { DataSource } from 'typeorm'
import {
  env_db,
  env_host_db,
  env_password_db,
  env_port_db,
  env_user_db
} from '@shared/config/environment'
import { User } from '@users/entities/user.entity'
import { Role } from '@roles/entities/role.entity'
import { Permission } from '@permissions/entities/permission.entity'
import { Enrollment } from '@root/components/enrollment/entities/enrollment.entity'
import { Classroom } from '@root/components/classrooms/entities/classroom.entity'
import { Period } from '@root/components/periods/entities/period.entity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: env_host_db,
  port: Number(env_port_db),
  username: env_user_db,
  password: env_password_db,
  database: env_db,
  synchronize: true,
  logging: false,
  entities: [User, Role, Permission, Enrollment, Classroom, Period],
  migrations: [],
  subscribers: []
})
