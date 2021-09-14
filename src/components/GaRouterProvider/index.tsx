import React from 'react'
import { Router } from 'react-router-dom'
import useGaListener from '../hooks/useGa'

const GaRouterProvider = ({ children }: any) => {
	const gaCode = 'UA-203940289-1'
	return <Router history={useGaListener(gaCode)}>{children}</Router>
}

export default GaRouterProvider
