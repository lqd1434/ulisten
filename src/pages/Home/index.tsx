import { useHistory } from 'react-router-dom'
import React from 'react'
import { Box } from '@chakra-ui/react'

const Home = () => {
	const history = useHistory()
	return (
		<Box color="white" flexDirection={'column'}>
			home
		</Box>
	)
}

export default Home
