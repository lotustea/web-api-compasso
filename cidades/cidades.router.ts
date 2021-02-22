import {ModelRouter} from '../common/model-router'
import * as restify from 'restify'
import {Cidade} from './cidades.model'

class CidadesRouter extends ModelRouter<Cidade> {
  constructor() {
    super(Cidade)
  }
  applyRoutes(application: restify.Server) {
    application.get('/cidades', this.findAll)
    application.get('/cidades/:id', this.findById)
    application.get('/cidades/nome/:nome', this.findByName)
    application.post('/cidades', this.save)
    application.put('/cidades/:id', this.replace)
    application.patch('/cidades/:id', this.update)
    application.del('/cidades/:id', this.delete)
    application.get('/cidades/estado/:estado', (req, resp, next) => {
      Cidade.find({estado : req.params.estado})
        .then(this.render(resp, next))
        .catch(next)
    })

  }
}

export const cidadesRouter = new CidadesRouter