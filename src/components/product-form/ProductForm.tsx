import { useRef } from "react"
import { useDispatch } from "react-redux"
import { productAddAction } from "../../store/product/actions"

const ProductForm = () => {
    const dispatch = useDispatch()
    const nameRef: any = useRef()

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (nameRef.current) {
            dispatch(productAddAction({
                id: new Date().getTime(),
                name: nameRef.current.value,
            }))
        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" ref={nameRef} />
                <button>Create</button>
            </form>
        </div>
    )
}

export default ProductForm
