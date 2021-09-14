import { useHistory } from 'react-router-dom'
import React from 'react'
import { Box } from '@chakra-ui/react'

const GeDan = () => {
	const history = useHistory()
	return (
		<Box color="white" flexDirection={'column'}>
			歌单
		</Box>
	)
}

export default GeDan
