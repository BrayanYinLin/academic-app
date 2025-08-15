import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Permission } from '@permissions/entities/permission.entity'
import { User } from '@root/components/users/entities/user.entity'

@Entity()
class Role {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  name!: string

  @Column({ type: 'varchar', length: 125, nullable: true })
  description?: string

  @OneToMany(() => User, (users) => users.role)
  users?: User[]

  @ManyToMany(() => Permission, (permission) => permission.roles)
  @JoinTable({ name: 'role_permissions' })
  permissions!: Permission[]

  @Column({ type: 'boolean', default: true })
  state!: boolean

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updatedAt?: Date
}

export { Role }
