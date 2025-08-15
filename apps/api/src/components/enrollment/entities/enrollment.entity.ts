import { Period } from '@root/components/periods/entities/period.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Enrollment {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => Period, (enrollment) => enrollment.enrollments)
  period!: Period

  @Column({ type: 'varchar', unique: true })
  name!: string

  @Column({ type: 'timestamp' })
  beginDate!: Date

  @Column({ type: 'timestamp' })
  endDate!: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updatedAt?: Date
}

export { Enrollment }
