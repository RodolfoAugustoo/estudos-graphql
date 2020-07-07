const {Perfis} = require("../../data/db")

module.exports = {
  perfil(_, {id}) {
    console.log('Perfis', Perfis)
    const perfil = Perfis.filter(p => p.id == id)

    return perfil ? perfil[0] : null
  },
  perfis() {
    return Perfis
  }
}
