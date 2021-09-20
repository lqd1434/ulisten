import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import styles from './index.module.scss'
import { HomeIcon } from '../../lib/icons'

const Home = () => {
	return (
		<Box
			display={'flex'}
			color="white"
			height={'calc(100vh - 80px)'}
			flexDirection={'column'}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<Center className={styles.numui}>
				<HomeIcon color={'#5E64FF'} size={50} />
			</Center>
		</Box>
	)
}

export default Home
