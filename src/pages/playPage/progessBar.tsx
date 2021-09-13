import React, { useEffect, useState } from 'react'
import { emitter } from '../../utils/EventEmiter'
import { Box, Flex } from '@chakra-ui/react'

const ProgressBar = () => {
	const [progress, setProgress] = useState('30')
	const [currentTime, setCurrentTime] = useState('')
	const [musicDuration, setMusicDuration] = useState('')

	const stateFunc = (e: any) => {
		setProgress((e.target as EventTarget & HTMLInputElement).value)
	}

	useEffect(() => {
		emitter.on<string>('musicDuration', (data) => {
			setMusicDuration(data)
		})
		emitter.on<string>('musicCurrentTime', (data) => {
			setCurrentTime(data)
		})
	}, [])

	return (
		<Flex marginTop={30} paddingX={'5px'}>
			<Box w={50}>{currentTime || '00:00'}</Box>
			<input
				min={0}
				max={100}
				value={parseInt(progress)}
				onChange={stateFunc}
				onTouchEnd={stateFunc}
				onMouseUp={stateFunc}
				type={'range'}
				style={{ backgroundSize: `${progress}% 100%`, width: screen.availWidth - 150 }}
			/>
			<Box pl={3}>{musicDuration || '00:00'}</Box>
		</Flex>
	)
}

export default ProgressBar
