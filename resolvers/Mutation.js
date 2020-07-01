const {Usuarios, proximoID} = require('../data/db')

module.exports = {
  //{nome, email, idade}

  novoUsuario(_, args) {

    const emailExistente = Usuarios.some(e => e.email === args.email)

    if(emailExistente) throw new Error("E-mail já cadastrado!")

    const novo = {
      id: proximoID(), ...args, perfil_id: 1, status: 'ATIVO'
    }
    Usuarios.push(novo)
    return novo
  }
}
