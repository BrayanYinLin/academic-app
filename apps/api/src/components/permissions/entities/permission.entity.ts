import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from '@roles/entities/role.entity'

@Entity()
class Permission {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', length: 100, unique: true })
  name!: string

  @ManyToMany(() => Role, (role) => role.permissions)
  roles!: Role[]
}

export { Permission }
