import { useSelector } from 'react-redux'
import { counterSelector } from '../../store/counter/selectors'

const Main = () => {
    const counter = useSelector(counterSelector)
    return (
        <div>{counter}</div>
    )
}

export default Main
