import { useHistory } from 'react-router-dom'
import React from 'react'
import { Box, Center, Flex } from '@chakra-ui/react'
import BottomNav from '../../components/BottomNav'

const Home = () => {
	const history = useHistory()
	return (
		<Box color="white" flexDirection={'column'}>
			home
		</Box>
	)
}

export default Home
