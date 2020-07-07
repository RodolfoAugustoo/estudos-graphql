module.exports = {
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
}
