import React from 'react'
import { Box, Flex, SimpleGrid, Square, Text } from '@chakra-ui/react'
import styles from './index.module.scss'
import { MusicIcon, SearchIcon } from '../../lib/icons'

const Home = () => {
	return (
		<Flex
			w={'100vw'}
			height={'calc(100vh - 80px)'}
			flexDirection={'column'}
			alignItems={'center'}
			color={'#1A55E9'}
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
				<Box flex={1} className={styles.title} mx={4} h={'3rem'} />
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
			<Flex
				ml={4}
				mt={8}
				alignSelf={'start'}
				fontSize={14}
				w={'90vw'}
				justifyContent={'space-between'}
			>
				<Text className={styles.numui} py={1} px={3}>
					歌单速递
				</Text>
				<Text className={styles.numui} py={1} px={3}>
					更多
				</Text>
			</Flex>
			<Box mt={'1.1rem'} w={'95vw'} h={'35vw'} className={styles.numuiCollapse} p={4}>
				<SimpleGrid justifyItems={'center'} columns={3} mt={1}>
					<Square className={styles.numui} h={'25vw'} w={'25vw'}>
						1
					</Square>
					<Square className={styles.numui} h={'25vw'} w={'25vw'}>
						2
					</Square>
					<Square className={styles.numui} h={'25vw'} w={'25vw'}>
						3
					</Square>
				</SimpleGrid>
			</Box>
			<Box ml={4} mt={6} alignSelf={'start'} className={styles.numui} fontSize={14} py={1} px={3}>
				新歌推荐
			</Box>
			<Box flex={1} mt={'1rem'} mb={'1rem'} className={styles.numuiCollapse} w={'95vw'} />
		</Flex>
	)
}

export default Home
