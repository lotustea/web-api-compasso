import {ModelRouter} from '../common/model-router'
import * as restify from 'restify'
import { Cliente } from './clientes.model'
 

class ClientesRouter extends ModelRouter<Cliente> {
  constructor() {
    super(Cliente)
  }
  applyRoutes(application: restify.Server) {
    application.get('/clientes', this.findAll)
    application.get('/clientes/:id', this.findById)
    application.get('/clientes/nome/:nome', this.findByName)
    application.post('/clientes', this.save)
    application.put('/clientes/:id', this.replace)
    application.patch('/clientes/:id', this.update)
    application.del('/clientes/:id', this.delete)
  }
}

export const clientesRouter = new ClientesRouter