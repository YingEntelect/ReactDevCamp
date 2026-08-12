type Product = {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
}

export type ProductDetailsProps = {
    product: Product
}