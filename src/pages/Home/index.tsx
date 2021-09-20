import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import styles from './index.module.scss'
import { MusicIcon, SearchIcon } from '../../lib/icons'

const Home = () => {
	return (
		<Flex
			color="white"
			w={'100vw'}
			height={'calc(100vh - 80px)'}
			flexDirection={'column'}
			alignItems={'start'}
			justifyContent={'start'}
		>
			<Flex w={'100vw'} mt={'1rem'} alignItems={'center'}>
				<Box>
					<Flex className={styles.logo} alignItems={'center'}>
						<MusicIcon />
						<Text ml={2} color={'#1A63A9'} fontWeight={500}>
							你听
						</Text>
					</Flex>
				</Box>
				<Box flex={1} className={styles.title} mx={4} h={'3rem'}></Box>
				<Flex
					mr={4}
					className={styles.numui}
					w={'3rem'}
					h={'3rem'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<SearchIcon />
				</Flex>
			</Flex>
		</Flex>
	)
}

export default Home
