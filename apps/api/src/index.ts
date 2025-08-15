import { AppDataSource } from '@shared/database/data-source'
import { app } from './main'
import { env_port_app } from '@shared/config/environment'
import { createRoles } from '@roles/lib/roles.seed'

const init = async () => {
  await AppDataSource.initialize()
  await createRoles()

  app.listen(env_port_app, () => {
    console.log(`Server is running on port ${env_port_app}`)
  })
}

init()
