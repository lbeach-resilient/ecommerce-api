export const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.SessionAPI.getSessions(args)
    },
    sessionsById: (parent, { id }, { dataSources }, info) => {
      return dataSources.SessionAPI.getSessionsById(id)
    },
  },
}
