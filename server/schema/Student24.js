import mongoose from 'mongoose';

const student = new mongoose.Schema(
  {
    nome: {type: 'string', required: true},
    email: {type: 'string', required: true},
    cpf: {type: 'string', required: true},
    instituicao: {type: 'string', required: true},
    primeiro_dia: {type: 'string'},
    segundo_dia: {type: 'string'},
    mesa_redonda: {type: 'string'}
  }
)

export default mongoose.model('Student24', student);
