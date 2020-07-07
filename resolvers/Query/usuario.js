const {Usuarios} = require("../../data/db")

module.exports = {
  usuario(_, {id}) {
    const selecionado = Usuarios.filter(u => u.id == id)
    return selecionado ? selecionado[0] : null
  },

  usuarioLogado() {
    return {
      id: 12,
      nome: 'Rodolfo',
      email: 'rodolfo@rodolfo.com.br',
      idade: 23,
      salario_real: 2222.23,
      vip: true
    }
  },

  usuarios() {
    return Usuarios
  }
}
