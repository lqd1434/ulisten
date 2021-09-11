import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'animate.css'
import GaRouterProvider from './components/GaRouterProvider'

ReactDOM.render(
	<GaRouterProvider>
		<App />
	</GaRouterProvider>,
	document.getElementById('root'),
)
