import { Button, Pane } from 'evergreen-ui'
import { useHistory } from 'react-router-dom'
import React from 'react'

const Home = () => {
	const history = useHistory()
	return (
		<Pane>
			<Pane>home</Pane>
			<Button onClick={() => history.push('/play')}>跳转</Button>

			<Pane width={screen.width} height={100} overflow={'auto'}>
				<Pane width={'100%'} height={150} backgroundColor={'beige'} overflow={'auto'}>
					11111111
				</Pane>
			</Pane>
		</Pane>
	)
}

export default Home
