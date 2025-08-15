import { AppDataSource } from '@shared/database/data-source'
import { PERMISSIONS, ROLES } from './constants'
import { Role } from '@roles/entities/role.entity'
import { Permission } from '@permissions/entities/permission.entity'

export const createRoles = async () => {
  const roleRepository = AppDataSource.getRepository(Role)
  const permissionRepository = AppDataSource.getRepository(Permission)

  for (const item of Object.entries(PERMISSIONS)) {
    const name = item[1]
    let permission = await permissionRepository.findOne({ where: { name } })

    if (!permission) {
      permission = permissionRepository.create({
        name: name
      })

      await permissionRepository.save(permission)
    }
  }

  const ROLE_DATA = [
    { name: ROLES.ADMIN, description: 'Administrador con acceso total' },
    {
      name: ROLES.TEACHER,
      description: 'Profesor que gestiona calificaciones'
    },
    {
      name: ROLES.STUDENT,
      description: 'Estudiante que se inscribe y consulta notas'
    }
  ]

  for (const roleData of ROLE_DATA) {
    let role = await roleRepository.findOne({
      where: { name: roleData.name },
      relations: ['permissions']
    })

    if (!role) {
      role = roleRepository.create(roleData)
      role.permissions = []
    }

    const permissions = await permissionRepository.find()

    switch (roleData.name) {
      case ROLES.ADMIN:
        role.permissions = permissions // todos los permisos
        break
      case ROLES.TEACHER:
        role.permissions = permissions.filter(({ name }) =>
          [
            PERMISSIONS.READ_COURSE,
            PERMISSIONS.READ_CLASSROOM,
            PERMISSIONS.READ_ENROLLMENT,
            PERMISSIONS.CREATE_GRADE,
            PERMISSIONS.EDIT_GRADE,
            PERMISSIONS.READ_GRADE
          ].includes(name)
        )
        break
      case ROLES.STUDENT:
        role.permissions = permissions.filter((p) =>
          [
            PERMISSIONS.READ_COURSE,
            PERMISSIONS.READ_CLASSROOM,
            PERMISSIONS.CREATE_ENROLLMENT,
            PERMISSIONS.CANCEL_ENROLLMENT,
            PERMISSIONS.READ_ENROLLMENT,
            PERMISSIONS.READ_GRADE
          ].includes(p.name)
        )
        break
    }

    await roleRepository.save(role)
  }
}
