import { DataSource } from 'apollo-datasource'
import { Product, productsList } from '../data/product'

export type ProductAPIDataSource = DataSource & {
    getProducts: () => Product[]
    getProductById: (id: string) => Product
}

export default class ProductAPI extends DataSource implements ProductAPIDataSource {
    constructor() {
        super()
    }

    getProducts() {
        return productsList
    }
    getProductById(id: string) {
        const getProduct = productsList.filter((product) => id === product.id)
        return getProduct[0]
    }
}
