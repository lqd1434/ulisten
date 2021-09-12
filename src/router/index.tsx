import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../components/Loading'

const PlayPage = React.lazy(() => import('../pages/playPage'))
const Home = React.lazy(() => import('../pages/Home'))

export const FirstRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/play" component={PlayPage} />
			</Switch>
		</Suspense>
	)
}
