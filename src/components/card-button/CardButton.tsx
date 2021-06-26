import { useDispatch } from 'react-redux'
import { counterAddAction, counterSubAction } from '../../store/counter/actions'

const CardButton = () => {
    const dispatch = useDispatch()
    const handleSub = () => {
        dispatch(counterSubAction(1))
    }

    const handleAdd = () => {
        dispatch(counterAddAction(1))
    }

    return (
        <div>
            <button onClick={handleSub}>-</button>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default CardButton
