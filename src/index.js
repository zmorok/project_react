import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './components/redux/store'
import { setGoods } from './components/redux/goodsSlice'

import 'normalize.css'
import App from './App'

// получение товаров с items.json и добавление их в store
await fetch('/tradeunity/items.json')
	.then(response => response.json())
	.then(data => {
		store.dispatch(setGoods(data))
			? console.log('Good fetch')
			: console.log('Bad fetch')
	})
	.catch(e => {
		console.error('Error: ', e)
	})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
