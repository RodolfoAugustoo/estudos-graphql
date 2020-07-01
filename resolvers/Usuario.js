const {Perfis} = require('../data/db')

module.exports = {
  /**
   * Suponde que o salario venha com outro nome do BD por exemplo é possível
   * resolver esse nome da sguinte forma
   */
  salario(usuario) {
    return usuario.salario_real
  },
  perfil(usuario) {
    const p = Perfis.filter(perfil => perfil.id === usuario.perfil_id)

    return p ? p[0] : null
  }
}
