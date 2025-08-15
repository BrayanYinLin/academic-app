import { z } from 'zod'

export const createPermissionSchema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().min(3)
})

export const updatePermissionSchema = z.object({
  name: z.string().min(3).max(100).optional(),
  description: z.string().min(3).optional()
})

export const permissionResponseSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string()
})

export type CreatePermissionDto = z.infer<typeof createPermissionSchema>
export type UpdatePermissionDto = z.infer<typeof updatePermissionSchema>
export type PermissionResponseDto = z.infer<typeof permissionResponseSchema>
