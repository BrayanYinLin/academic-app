import {
  CreateRoleDto,
  RoleResponseDto,
  UpdateRoleDto
} from './entities/dtos/role.dto'

interface RoleService {
  findAll(): Promise<RoleResponseDto[]>
  findById(id: string): Promise<RoleResponseDto | null>
  create(rol: CreateRoleDto): Promise<Void>
  update(rol: UpdateRoleDto): Promise<Void>
  delete(id: string): Promise<Void>
}

export { RoleService }
