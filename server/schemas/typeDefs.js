const { gql } = require('apollo-server-express');

const typeDefs = gql`
  typeUser {
    _id: ID! 
    username: String! 
    email: String!
    bookCount: Int 
    saveBooks: [Book] 
    }

  type Auth { 
    token: ID!
    user: User
  }
  



`