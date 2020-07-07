const {Perfis, proximoID} = require("../../data/db")

function indicePerfil(filtro) {
  if (!filtro) return -1

  const {id, nome} = filtro

  if (id) {
    return Perfis.findIndex(f => f.id === id)
  } else if (nome) {
    return Perfis.findIndex(f => f.nome === nome)
  }
  return -1
}

module.exports = {
  novoPerfil(_, {dados}) {
    if (Perfis.some(p => p.nome === dados.nome)) throw new Error("Perfil com esse nome já existe!")
    const novo = {
      id: proximoID(), ...dados
    }
    Perfis.push(novo)
    return novo
  },

  alteraPerfil(_, {filtro, dados}){
    const index = indicePerfil(filtro)
    const alterado = Perfis[index]
    if(dados.nome) Perfis[index].nome = dados.nome
    return alterado
  },

  excluirPerfil(_, {filtro}){
    const index = indicePerfil(filtro)
    if(index < 0) throw new Error("Não encontrado!")

    const excluido = Perfis.splice(index,1)

    return excluido ? excluido[0] : null
  }
}
