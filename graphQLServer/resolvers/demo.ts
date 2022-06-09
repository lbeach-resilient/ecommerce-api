import { Resolvers } from './types'

export const resolvers: Resolvers = {
    Query: {
        sessions: (parent, args, { dataSources }) => {
            return dataSources.SessionAPI.getSessions()
        },
        sessionsBy: (parent, { id }, { dataSources }) => {
            return dataSources.SessionAPI.getSessionsBy(id)
        }
    }
}
