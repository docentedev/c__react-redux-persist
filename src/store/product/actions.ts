import { PRODUCT_DELETE, PRODUCT_ADD } from '.'
import { Action } from '../types'
import { Product, ProductPayload } from './types'

export const productAddAction = (product: Product): Action<ProductPayload> => {
    return {
        type: PRODUCT_ADD,
        payload: product,
    }
}

export const productDeleteAction = (product: Product): Action<ProductPayload> => {
    return {
        type: PRODUCT_DELETE,
        payload: product,
    }
}
