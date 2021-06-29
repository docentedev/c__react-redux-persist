import createPersist from '../../utils/createPersist'
import { Action } from '../types'
import { ProductState, ProductPayload, Product } from './types'

export const PRODUCT_ADD = 'PRODUCT_ADD'
export const PRODUCT_DELETE = 'PRODUCT_DELETE'

const initialState: ProductState = {
    products: [],
}

const productPersist = createPersist('redux-product')

const reducer = (prevState = productPersist.get() || initialState, action: Action<ProductPayload>): ProductState => {
    let currStore: ProductState = {
        products: [],
    }
    switch (action.type) {
        case PRODUCT_ADD:
            currStore = {
                products: [...prevState.products, action.payload]
            }
            productPersist.set(currStore)
            break
        case PRODUCT_DELETE:
            currStore = {
                products: prevState.products.filter((p: Product) => p.id !== action.payload.id),
            }
            productPersist.set(currStore)
            break
        default:
            currStore = prevState
    }
    return currStore
}

export default reducer
