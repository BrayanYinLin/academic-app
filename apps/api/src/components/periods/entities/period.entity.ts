import { Enrollment } from '@root/components/enrollment/entities/enrollment.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Period {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', unique: true })
  name!: string

  @Column({ type: 'timestamp' })
  beginningDate!: Date

  @Column({ type: 'timestamp' })
  endDate!: Date

  @OneToMany(() => Enrollment, (period) => period.period, { eager: false })
  enrollments?: Enrollment[]

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updatedAt?: Date
}

export { Period }
