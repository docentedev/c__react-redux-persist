import { useDispatch, useSelector } from "react-redux"
import { productDeleteAction } from "../../store/product/actions"
import { productSelector } from "../../store/product/selectors"
import { Product } from "../../store/product/types"

const Products = () => {
    const products: Product[] = useSelector(productSelector)
    const dispatch = useDispatch()
    const handleDelete = (product: Product) => {
        dispatch(productDeleteAction(product))
    }
    return (
        <div>
            {products.map((product: Product) => (
                <div key={product.id}>
                    {product.name}
                    <button onClick={() => handleDelete(product)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Products
