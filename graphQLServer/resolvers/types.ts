/* eslint-disable @typescript-eslint/no-explicit-any */
import { SessionAPIDataSource } from '../datasources/sessions'

type ResolverArgument<Arguments, Context> = (
    parent: any,
    args: Arguments,
    context: Context,
    info: any
) => any

interface Query<Context> {
    sessions: ResolverArgument<null, Context>
    sessionsBy: ResolverArgument<{ id: string }, Context>
}

export type Resolvers = {
    Query: Query<{
        dataSources: {
            SessionAPI: SessionAPIDataSource
        }
    }>
}
