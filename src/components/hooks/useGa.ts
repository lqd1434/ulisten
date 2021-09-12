import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'

const useGaListener = (gaCode: string) => {
	const customHistory = createBrowserHistory()
	ReactGA.initialize('2815518441')
	customHistory.listen((location) => {
		ReactGA.set({ page: window.location.pathname })
		ReactGA.pageview(location.pathname + location.search)
	})
	return customHistory
}
export default useGaListener
