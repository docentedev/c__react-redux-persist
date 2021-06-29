import { Product } from "./types";

export const productSelector = (s: any): Product[] => s.product.products
