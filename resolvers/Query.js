const {Usuarios, Perfis} = require('../data/db')

module.exports = {
  ola() {
    return 'Bom dia'
  },
  dataAtual() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const months = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro"]

    date = new Date()
    return `Hoje é ${weekDays[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}.`
  },
  horaCerta() {
    date = new Date()

    return `Hora certa: ${date.getHours()}:${date.getMinutes()}`
  },
  testeDate() {
    return new Date
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
  produtoEmDestaque() {
    return {
      nome: 'IPhone',
      preco: 2500.99,
      desconto: 0.2
    }
  },
  megaSena() {
    const crescente = (a, b) => a - b
    return Array(8).fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(crescente)
  },
  usuarios() {
    return Usuarios
  },
  usuario(_, {id}) {
    const selecionado = Usuarios.filter(u => u.id == id)
    return selecionado ? selecionado[0] : null
  },
  perfil(_, {id}) {
    const perfil = Perfis.filter(p => p.id == id)

    return perfil ? perfil[0] : null
  },
  perfis() {
    return Perfis
  }
}
