export const resolvers = {
  Query: {
    sessions: (parent: any, args: any, { dataSources }: any, info: any) => {
      return dataSources.SessionAPI.getSessions(args)
    },
    sessionsBy: (parent: any, { id }: any, { dataSources }: any, info: any) => {
      return dataSources.SessionAPI.getSessionsBy(id)
    },
  },
}
