import React from 'react'
import { Box, Flex, Input, Text } from '@chakra-ui/react'
import styles from './index.module.scss'
import { MusicIcon, SearchIcon } from '../../lib/icons'
import GeDanCards from './GeDanCards'
import NewMusicItem from './NewMusicItem'

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
			<Flex w={'100vw'} mt={'1rem'} alignItems={'center'} justifyContent={'center'}>
				<Box flex={1}>
					<Flex className={styles.logo} alignItems={'center'}>
						<MusicIcon />
						<Text ml={1} color={'#1A63A9'} fontWeight={500}>
							你听
						</Text>
					</Flex>
				</Box>
				<Box flex={1} className={styles.title} mx={4} h={'3rem'}>
					<Input
						placeholder="请输入"
						h={'2rem'}
						w={'80%'}
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
			<GeDanCards />
			<Box ml={4} mt={6} alignSelf={'start'} className={styles.numui} fontSize={14} py={1} px={3}>
				新歌推荐
			</Box>
			<Box
				flex={1}
				mt={'1rem'}
				p={2}
				pt={4}
				mb={'1rem'}
				className={styles.numuiCollapse}
				w={'95vw'}
				overflow={'auto'}
			>
				<NewMusicItem />
				<NewMusicItem />
				<NewMusicItem />
				<NewMusicItem />
				<NewMusicItem />
			</Box>
		</Flex>
	)
}

export default Home
