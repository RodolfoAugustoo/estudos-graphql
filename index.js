const { ApolloServer, gql } = require('apollo-server')
/**
 * gql é uma tagged template
 * É uma função que interpreta uma 'template string' criando algo
 */

/**
 * Definições de tipos são escritas no typeDefs
 * Esquema da API
 */

const Usuarios = [{
    id: 1,
    nome: "rodolfo",
    email: 'r.@dolfo.vom'
},
{
    id: 2,
    nome: 'josé',
    email: 'jo@se.com'
},
{
    id: 3,
    nome: 'michele',
    email: 'mi@chele.com'
}]

const typeDefs = gql`
    #Pontos de entrada dentro da API
    #Qualquer consulta dentro do tipo query(nome reservado), é um ponto de entrada
    #Independente da quantidade de queries continua sendo uma url para todas

    type Query{
        ola: String
        horaCerta: String
        dataAtual: String
        testeDate: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        megaSena: [Int]!
        usuarios: [Usuario]
        usuario(id: ID): Usuario
    }

    #Criando tipos

    scalar Date

    type Usuario{
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        produtoComDesconto: String
    }
 `;

/**
 * Esquema de fgunções que vao resolver os dados de fgormas dfiferentes
 */
const resolvers = {
    Query: {
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
        usuario(_, { id }) {
            const selecionado = Usuarios.filter(u => u.id == id)
            return selecionado ? selecionado[0] : null
        }
    },
    Usuario: {
        /**
         * Suponde que o salario venha com outro nome do BD por exemplo é possível
         * resolver esse nome da sguinte forma
         */
        salario(usuario) {
            return usuario.salario_real
        }
    },
    Produto: {
        produtoComDesconto(produto) {
            if (produto.desconto) {
                return (produto.preco * (1 - produto.desconto)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            }
            else {
                return produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log('Executando em', url)
})