const gql = require('graphql-tag')

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
  }
  
  type Auth {
    token: ID!
  }

  type Album {
    _id: ID!
    name: String
    genre: String
    year: String
    songs: [String]
  }

  type Query {
    users: [User]
    login(username: String!, password: String!): Auth
    getAlbums: [Album]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    seed: Boolean
  }
`;

module.exports = typeDefs;