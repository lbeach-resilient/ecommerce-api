import { resolvers } from '../graphQLServer/resolvers'
import { typeDefs } from '../graphQLServer/schema'
import StartApolloServer from '../graphQLServer'
import 'dotenv/config'

const port = parseInt(process.env.PORT)

StartApolloServer(port, { typeDefs, resolvers })
