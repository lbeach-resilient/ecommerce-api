import { resolvers } from "../graphQLServer/resolvers/demo"
import { typeDefs } from "../graphQLServer/schema/demo"
import StartApolloServer from "../graphQLServer"
import "dotenv/config"

const port = parseInt(process.env.PORT)

StartApolloServer(port, { typeDefs, resolvers })
