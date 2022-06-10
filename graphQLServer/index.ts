import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import SessionAPI from './datasources/demo'
import type { IExecutableSchemaDefinition } from '@graphql-tools/schema'

type ApolloServerConfig = {
    typeDefs: IExecutableSchemaDefinition['typeDefs']
    resolvers: IExecutableSchemaDefinition['resolvers']
}

export default async function StartApolloServer(
    port: number,
    { typeDefs, resolvers }: ApolloServerConfig
) {
    const app = express()
    const httpServer = http.createServer(app)
    const dataSources = () => ({
        SessionAPI: new SessionAPI()
    })
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
        dataSources,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    })
    await server.start()
    server.applyMiddleware({ app })
    await new Promise<void>((resolve) => httpServer.listen({ port }, resolve))
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
}
