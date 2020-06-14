const { ApolloServer, gql } = require('apollo-server')
/**
 * gql é uma tagged template
 * É uma função que interpreta uma 'template string' criando algo
 */

 /**
  * Definições de tipos são escritas no typeDefs
  * Esquema da API
  */
const typeDefs = gql`
    #Pontos de entrada dentro da API
    #Qualquer consulta dentro do tipo query(nome reservado), é um ponto de entrada
    #Independente da quantidade de queries continua sendo uma url para todas

    type Query{
        ola: String
        horaCerta: String
        dataAtual: String
    }
 `;

 /**
  * Esquema de fgunções que vao resolver os dados de fgormas dfiferentes
  */
 const resolvers = {
     Query: {
         ola(){
             return 'Bom dia'
         },
         dataAtual(){
             const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
             const months = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro"]

             date = new Date()
             return `Hoje é ${weekDays[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}.`
         },
         horaCerta(){
             date = new Date()

             return `Hora certa: ${date.getHours()}:${date.getMinutes()}`
         }
     }
 }

 const server = new ApolloServer({
     typeDefs,
     resolvers
 })

 server.listen().then(({url}) => {
     console.log('Executando em', url)
 })