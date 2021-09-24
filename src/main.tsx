import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import 'animate.css'
import GaRouterProvider from './components/GaRouterProvider'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
	<GaRouterProvider>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</GaRouterProvider>,
	document.getElementById('root'),
)
