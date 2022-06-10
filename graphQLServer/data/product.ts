import { faker } from '@faker-js/faker'

export type Product = {
    id: string
    title: string
    description: string
    category: string
    specs: Record<string, string[]>
    price: string
    stock: number
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
    stock: randomNumber(20)
})

export const productsList = Array(30)
    .fill(' ')
    .map(() => product())
