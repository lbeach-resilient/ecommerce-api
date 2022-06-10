import { faker } from '@faker-js/faker'

type Specifications = {
    adjective: string[]
    color: string[]
}

export type Product = {
    id: string
    title: string
    description: string
    category: string
    specs: Specifications
    price: string
    stock: number
    image: string
}

const randomNumber = (max: number) => Math.floor(Math.random() * max)

const product: () => Product = () => ({
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.product(),
    specs: {
        adjective: [faker.commerce.productAdjective()],
        color: [faker.color.human()]
    },
    price: faker.commerce.price(),
    stock: randomNumber(20),
    image: faker.image.imageUrl()
})

export const products = Array(30)
    .fill(' ')
    .map(() => product())

export const productsList = products
