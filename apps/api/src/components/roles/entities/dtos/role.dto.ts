import { z } from 'zod'

export const createRoleDto = z.object({
  name: z.string().min(3).max(50),
  description: z.string().max(125).optional(),
  permissionIds: z.array(z.string().uuid()).optional()
})

export const updateRoleDto = z.object({
  name: z.string().min(3).max(50).optional(),
  description: z.string().max(125).optional(),
  permissionIds: z.array(z.string().uuid()).optional(),
  state: z.boolean().optional()
})

export const roleResponseDto = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string().nullable(),
  state: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  permissions: z
    .array(
      z.object({
        id: z.uuid(),
        name: z.string(),
        description: z.string()
      })
    )
    .optional()
})

export type CreateRoleDto = z.infer<typeof createRoleDto>
export type UpdateRoleDto = z.infer<typeof updateRoleDto>
export type RoleResponseDto = z.infer<typeof roleResponseDto>
