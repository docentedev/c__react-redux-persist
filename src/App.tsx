import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Main from './components/main/Main'
import CardButton from './components/card-button/CardButton'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CardButton />
        <Main />
      </div>
    </Provider>
  )
}

export default App
