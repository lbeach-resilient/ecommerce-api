import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Query {
        products: [Product]
        productById(id: ID): Product
    }
    type Product {
        id: ID!
        title: String!
        description: String
        category: String
        specs: Specifications
        price: String
        stock: Int
        image: String
    }
    type Specifications {
        adjective: [String]
        color: [String]
    }
`
