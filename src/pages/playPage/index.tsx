import React, { useEffect, useState } from 'react'
import PlayIcon from './components/playIcon'
import LastIcon from './components/lastIcon'
import NextIcon from './components/nextIcon'
import styles from './layout.module.scss'
import ProgressBar from './components/progessBar'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import { Box, Heading, Text } from '@chakra-ui/react'
import {
	AlbumIcon,
	BackIcon,
	HeartIcon,
	MusicListIcon,
	PlayOrderIcon,
	VolumnIcon,
} from '../../lib/icons'
import { useMusicListStore, useMusicPlayStore } from '../../store'
import { emitter } from '../../utils/EventEmiter'
import DrawerList from './DrawerList'

const musicUrl1 = '/src/static/musics/白鸽 - 你的上好佳.mp3'
const musicUrl2 = '/src/static/musics/不如 - 秦海清.mp3'
const musicUrl3 = '/src/static/musics/善变 - 王靖雯不胖.mp3'
const musicUrl4 = '/src/static/musics/时光洪流 - 程响.mp3'

const PlayPage = () => {
	const history = useHistory()
	const [isShow, setShow] = useState(false)
	const [ani, setAni] = useState('')
	const { isPlaying } = useMusicPlayStore((state) => state)
	const setMusicList = useMusicListStore((state) => state.setMusicList)

	useEffect(() => {
		setTimeout(() => {
			setAni('animate__fadeIn')
			setShow(true)
		}, 100)
	}, [])

	useEffect(() => {
		setMusicList([
			{ musicName: '白鸽', singer: '你的上好佳' },
			{ musicName: '不如', singer: '秦海清' },
			{
				musicName: '善变',
				singer: '王靖雯不胖',
			},
		])
	}, [])

	const openDrawer = () => {
		emitter.emit<boolean>('openDrawer', true)
	}

	return (
		<Box w={'100vw'} h={'100vh'} backgroundColor={'#F7DC4F'}>
			<Box
				visibility={isShow ? 'visible' : 'hidden'}
				className={clsx(['animate__animated', ani, styles.con])}
			>
				<Box className={styles.header}>
					<Box
						onClick={() => history.push('/')}
						backgroundColor={'#FB9069'}
						marginLeft={6}
						padding={3}
						borderRadius={'50%'}
						textAlign={'center'}
					>
						<BackIcon size={20} />
					</Box>
				</Box>
				<Box className={styles.body} color={'black'}>
					<Box alignSelf={'center'} my={'2rem'} className={isPlaying ? styles.albumIconRotate : ''}>
						<AlbumIcon />
					</Box>
					<Box className={styles.musicInfo}>
						<Heading size={'md'} marginBottom={3}>
							清空
						</Heading>
						<Box display={'flex'} alignItems={'center'}>
							<Text ml={'2px'} fontSize={'14px'} marginRight={3}>
								鹿晗
							</Text>
							<Text
								color={'black'}
								fontSize={'14px'}
								backgroundColor={'#F5F5F5'}
								borderRadius={10}
								padding={'3px'}
							>
								关注
							</Text>
						</Box>
						<Box paddingTop={7}>这是一句歌词</Box>
						<Box paddingTop={2}>这又是一句歌词哈哈</Box>
					</Box>
					<Box className={styles.operateMenu} paddingX={'10px'}>
						<HeartIcon size={33} />
						<PlayOrderIcon size={33} color={'#000028'} />
						<VolumnIcon size={33} color={'#5E64FF'} />
						<Box onClick={openDrawer}>
							<MusicListIcon size={33} color={'#2BC0FF'} />
						</Box>
					</Box>
					<Box height={'5rem'} alignSelf={'center'}>
						<ProgressBar />
					</Box>
				</Box>
				<Box className={styles.bottom}>
					<LastIcon />
					<PlayIcon />
					<NextIcon />
				</Box>
			</Box>
			<DrawerList />
		</Box>
	)
}
export default PlayPage
