const { ApolloServer, gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Query {
    random: String
  }
`;

const resolvers = {
  Query: {
    random: (root, args, context) => {
      return Math.random().toString();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

module.exports = server.createHandler({ path: '/api/' });
