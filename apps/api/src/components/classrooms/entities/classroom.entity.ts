import { User } from '@users/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Classroom {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => User, (user) => user.classrooms)
  user!: User

  @Column({ type: 'timestamp' })
  enrollmentDate!: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updatedAt?: Date
}

export { Classroom }
