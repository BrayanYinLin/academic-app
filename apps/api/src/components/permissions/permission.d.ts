import { PermissionResponseDto } from './entities/dtos/permission.dto'

interface PermissionService {
  findAll(): Promise<PermissionResponseDto[]>
  findById(id: string): Promise<PermissionResponseDto | null>
}
