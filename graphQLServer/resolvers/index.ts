import { Resolvers } from './types'

export const resolvers: Resolvers = {
    Query: {
        products: (parent, args, { dataSources }) => {
            return dataSources.ProductAPI.getProducts()
        },
        productById: (parent, { id }, { dataSources }) => {
            return dataSources.ProductAPI.getProductById(id)
        }
    }
}
