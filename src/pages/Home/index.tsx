import React from 'react'
import { Box, Flex, Input, Text } from '@chakra-ui/react'
import styles from './index.module.scss'
import { MusicIcon, SearchIcon } from '../../lib/icons'
import GeDanCards from './GeDanCards'
import NewMusicList from './NewMusicList'

const Home = () => {
	return (
		<Flex
			w={'100vw'}
			height={'calc(100vh - 80px)'}
			flexDirection={'column'}
			alignItems={'center'}
			color={'white'}
			justifyContent={'start'}
		>
			<Flex w={'100vw'} mt={'1rem'} alignItems={'center'} justifyContent={'center'}>
				<Box flex={1} color={'white'}>
					<Flex className={styles.logo} alignItems={'center'}>
						<MusicIcon color={'#C8C8F7'} />
						<Text ml={1} fontWeight={500}>
							你听
						</Text>
					</Flex>
				</Box>
				<Box flex={1} className={styles.title} mx={4} h={'3rem'}>
					<Input
						placeholder="请输入"
						h={'2rem'}
						w={'80%'}
						color={'white'}
						bgColor={'transparent'}
						border={'none'}
						outline={'none'}
						_focus={{ outline: 'none' }}
					/>
				</Box>
				<Flex
					mr={4}
					className={styles.numui}
					w={'3rem'}
					h={'3rem'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<SearchIcon color={'white'} />
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
			<GeDanCards />
			<Box ml={4} mt={6} alignSelf={'start'} className={styles.numui} fontSize={14} py={1} px={3}>
				新歌推荐
			</Box>
			<NewMusicList />
		</Flex>
	)
}

export default Home
