import ReactGA from 'react-ga'
import { createBrowserHistory, Location } from 'history'
import { emitter } from '../../utils/EventEmiter'

const useGaListener = (gaCode: string) => {
	const customHistory = createBrowserHistory()
	ReactGA.initialize(gaCode)
	customHistory.listen((location) => {
		emitter.emit<Location<unknown>>('location', location)
		ReactGA.set({ page: window.location.pathname })
		ReactGA.pageview(location.pathname + location.search)
	})
	return customHistory
}
export default useGaListener
