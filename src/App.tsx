import React, { useEffect, useMemo, useState } from 'react'
import { FirstRouter } from './router'
import Audio from './components/Audio'
import { Box, Center, Flex } from '@chakra-ui/react'
import BottomNav from './components/BottomNav'
import { AlbumIcon } from './lib/icons'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
import { emitter } from './utils/EventEmiter'
import { Location } from 'history'
import clsx from 'clsx'

const App = () => {
	const history = useHistory()

	const [isShow, setIsShow] = useState(true)
	const [ani, setAni] = useState('animate__zoomIn')

	useEffect(() => {
		emitter.on<Location<unknown>>('location', ({ pathname }) => {
			if (pathname === '/play') {
				setAni('animate__zoomOut')
				setTimeout(() => {
					setIsShow(false)
				}, 300)
			} else {
				setAni('animate__zoomIn')
				setTimeout(() => {
					setIsShow(true)
				}, 300)
			}
		})
	}, [])

	const MainArea = () => {
		return (
			<Flex w={'100vw'} h={'100vh'} bg="#F7DC4F" color="white" flexDirection={'column'}>
				<Box flex="1" bg="#F7DC4F">
					<FirstRouter />
				</Box>
				<BottomNav />
			</Flex>
		)
	}

	return (
		<Box position={'relative'}>
			{useMemo(
				() => (
					<MainArea />
				),
				[],
			)}
			<Center
				className={clsx(['animate__animated', ani, styles.albumIcon])}
				display={isShow ? 'flex' : 'none'}
			>
				<Box onClick={() => history.push('/play')}>
					<AlbumIcon size={7} />
				</Box>
			</Center>
			<Audio />
		</Box>
	)
}

export default App
