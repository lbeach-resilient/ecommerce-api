import { gql } from "apollo-server-express"

export const typeDefs = gql`
  type Query {
    sessions: [Session]
    sessionsBy(id: ID): Session
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
  }
`
