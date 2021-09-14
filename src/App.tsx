import React from 'react'
import { FirstRouter } from './router'
import Audio from './components/Audio'
import { Box, Flex } from '@chakra-ui/react'
import BottomNav from './components/BottomNav'

function App() {
	return (
		<>
			<Flex w={'100vw'} h={'100vh'} color="white" flexDirection={'column'}>
				<Box flex="1" bg="#F7DC4F">
					<FirstRouter />
				</Box>
				<BottomNav />
			</Flex>
			<Audio />
		</>
	)
}

export default App
