import { resolvers } from "../graphQLServer/resolvers/demo"
import { typeDefs } from "../graphQLServer/schema/demo"
import StartApolloServer from "../graphQLServer"

const port = 5000

StartApolloServer(port, { typeDefs, resolvers })
