module.exports = {
  produtoComDesconto(produto) {
    if (produto.desconto) {
      return (produto.preco * (1 - produto.desconto)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    } else {
      return produto.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    }
  }
}
