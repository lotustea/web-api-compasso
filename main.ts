import {Server} from './server/server'
import { clientesRouter } from './clientes/clientes.router'
import { cidadesRouter } from './cidades/cidades.router'

const server = new Server()
server.bootstrap([clientesRouter, cidadesRouter]).then(server=>{
  console.log('Server is listening on:', server.application.address())
}).catch(error=>{
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})
