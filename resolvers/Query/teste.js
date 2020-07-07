module.exports = {
  ola() {
    return 'Bom dia'
  },
  megaSena() {
    const crescente = (a, b) => a - b
    return Array(8).fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(crescente)
  }
}
