export type Product = {
    id: number;
    name: string;
}

export type ProductPayload = Product

export type ProductState = {
    products: Product[];
}