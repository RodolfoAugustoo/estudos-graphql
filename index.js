const {ApolloServer, gql} = require('apollo-server')
const {importSchema} = require('graphql-import')
const resolvers = require('./resolvers/Index')
/**
 * gql é uma tagged template
 * É uma função que interpreta uma 'template string' criando algo
 */

/**
 * Definições de tipos são escritas no typeDefs
 * Esquema da API
 */

/**
 * Esquema de fgunções que vao resolver os dados de fgormas dfiferentes
 */

const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers
})

server.listen().then(({url}) => {
  console.log('Executando em', url)
})
