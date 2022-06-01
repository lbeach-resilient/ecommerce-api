export const resolvers = {
  Query: {
    sessions: (parent: any, args: any, { dataSources }: any, info: any) => {
      return dataSources.SessionAPI.getSessions(args)
    },
    sessionsById: (
      parent: any,
      { id }: any,
      { dataSources }: any,
      info: any
    ) => {
      return dataSources.SessionAPI.getSessionsById(id)
    },
  },
}
