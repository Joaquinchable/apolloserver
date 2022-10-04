const { ApolloServer, gql } = require('apollo-server');

// GraphQL schema
// definición de un schema
const typeDefs = gql`

type Query {
    helloWorld: String
  }

`

const resolvers = {
    Query: {
        helloWorld: () => 'Hello World'
    },
}

const server = new ApolloServer({typeDefs, resolvers })

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})