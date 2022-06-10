/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductAPIDataSource } from '../datasources/products'

type ResolverArgument<Arguments, Context> = (
    parent: any,
    args: Arguments,
    context: Context,
    info: any
) => any

interface Query<Context> {
    products: ResolverArgument<null, Context>
    productById: ResolverArgument<{ id: string }, Context>
}

export type Resolvers = {
    Query: Query<{
        dataSources: {
            ProductAPI: ProductAPIDataSource
        }
    }>
}
