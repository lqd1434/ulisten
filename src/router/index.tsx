import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../components/Loading'

const PlayPage = React.lazy(() => import('../pages/playPage'))
const Home = React.lazy(() => import('../pages/Home'))
const GeDan = React.lazy(() => import('../pages/GeDan'))
const Mine = React.lazy(() => import('../pages/Mine'))
const TopList = React.lazy(() => import('../pages/TopList'))

export const FirstRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/play" component={PlayPage} />
				<Route path="/geDan" component={GeDan} />
				<Route path="/mine" component={Mine} />
				<Route path="/top" component={TopList} />
			</Switch>
		</Suspense>
	)
}
