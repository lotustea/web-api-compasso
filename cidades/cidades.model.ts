import * as mongoose from 'mongoose'


const cidadeSchema = new mongoose.Schema({
  nome: {
    type: String
  },
  estado: {
    type: String
  }
})

export const Cidade = mongoose.model('Cidade', cidadeSchema)