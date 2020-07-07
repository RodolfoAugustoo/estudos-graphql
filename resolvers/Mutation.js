const {Usuarios, proximoID} = require('../data/db')

function indiceUsuario(filtro) {
  if (!filtro) return -1

  const {id, email} = filtro

  if (id) {
    return Usuarios.findIndex(u => u.id === id)
  } else if (email) {
    return Usuarios.findIndex(u => u.email === email)
  }
  return -1
}

module.exports = {
  //{nome, email, idade}
  novoUsuario(_, {dados}) {
    const emailExistente = Usuarios.some(e => e.email === dados.email)
    if (emailExistente) throw new Error("E-mail já cadastrado!")
    const novo = {
      id: proximoID(), ...dados, perfil_id: 1, status: 'ATIVO'
    }
    Usuarios.push(novo)
    return novo
  },

  excluirUsuario(_, {filtro}) {
    const index = indiceUsuario(filtro)
    if (index < 0) return null
    const excluidos = Usuarios.splice(index, 1)
    return excluidos ? excluidos[0] : null
  },

  alterarUsuario(_, args) {
    const index = Usuarios.findIndex(i => i.id === args.id)
    if (index < 0) return null

    /*const alterado = {
      ...Usuarios[index],
      ...args
    }
     //Busca o indice informado, exclui um item a partir desse index e adiciona na posição exlcuida
    Usuarios.splice(index, 1, alterado)
    return alterado
    */

    args.nome ? Usuarios[index].nome = args.nome : Usuarios[index].nome
    args.email ? Usuarios[index].email = args.email : Usuarios[index].email
    args.idade ? Usuarios[index].idade = args.idade : Usuarios[index].idade

    return Usuarios[index]

  }
}



