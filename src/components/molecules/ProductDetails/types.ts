//TODO: move definition to query level once we get to that milestone
export type Product = {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
}

export type ProductDetailsProps = {
    product: Product
}