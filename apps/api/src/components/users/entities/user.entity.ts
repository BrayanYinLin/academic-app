import { Role } from '@roles/entities/role.entity'
import { Classroom } from '@root/components/classrooms/entities/classroom.entity'
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', unique: true, length: 100 })
  username!: string

  @Column({ type: 'varchar', length: 255 })
  password!: string

  @Column({ type: 'varchar', unique: true, length: 255 })
  email!: string

  @Column({ type: 'char', unique: true, length: 8 })
  dni!: string

  @ManyToOne(() => Role, (role) => role.users)
  role!: Role

  @Column({ type: 'boolean', default: true })
  state!: boolean

  @OneToMany(() => Classroom, (classroom) => classroom.user, { nullable: true })
  classrooms?: Classroom[]

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updatedAt?: Date
}

export { User }
