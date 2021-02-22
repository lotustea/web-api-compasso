import * as mongoose from 'mongoose'

const clienteSchema = new mongoose.Schema({
  nome: {
    type: String
  },
  sexo: {
    type: String
  },
  data_nascimento: {
    type: Date
  },
  cidade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cidade',
    required: true
  }  
})

export const Cliente = mongoose.model('Cliente', clienteSchema)