let id = 1

function proximoID() {
  return id++
}

const Usuarios = [{
  id: proximoID(),
  nome: "rodolfo",
  email: 'r.@dolfo.vom',
  perfil_id: 1,
  status: 'ATIVO'
},
  {
    id: proximoID(),
    nome: 'josé',
    email: 'jo@se.com',
    perfil_id: 2,
    status: 'INATIVO'
  },
  {
    id: proximoID(),
    nome: 'michele',
    email: 'mi@chele.com',
    perfil_id: 1,
    status: 'BLOQUEADO'
  }]

const Perfis = [
  {id: 1, nome: 'Comum'},
  {id: 2, nome: 'Administrador'}]

module.exports = {Usuarios, Perfis, proximoID}
