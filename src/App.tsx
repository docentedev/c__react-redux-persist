import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Main from './components/main/Main'
import CardButton from './components/card-button/CardButton'
import ProductForm from './components/product-form/ProductForm'
import Products from './components/products/Products'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CardButton />
        <Main />
        <ProductForm />
        <Products />
      </div>
    </Provider>
  )
}

export default App
