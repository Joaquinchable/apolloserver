const { ApolloServer, gql } = require('apollo-server');
// GraphQL schema
// definición de un schema
const typeDefs = gql`
type Query {
    getAllBooks: [Book],
    getBook(asin:ID!): Book
    hello(nombre:String!): String
  }
  type Book {
    asin: ID,
    title: String
    author: String
    pages: Int
  }

`
const resolvers = {
    Query: {
    getAllBooks: () => books,
    getBook: (_, {asin}) => {
      return books.find(e => e.asin == asin)
    },
    hello: (_, { nombre }) => `Hello ${nombre}`
  
  },
}

let books = [
    { asin: 'B00DQ845EA', title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz', pages: 308 },
    { asin: 'B015NTIXWE', title: 'Ego Is the Enemy', author: 'Ryan Holiday', pages: 247 },
    { asin: 'B00ICN066A', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', pages: 469 },
  ]
  

const server = new ApolloServer({typeDefs, resolvers })

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})