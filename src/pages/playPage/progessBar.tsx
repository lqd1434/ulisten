import { Pane } from 'evergreen-ui'
import React, { useEffect, useState } from 'react'
import { emitter } from '../../utils/EventEmiter'

const ProgressBar = () => {
	const [progress, setProgress] = useState('30')
	const [currentTime, setCurrentTime] = useState('')

	const stateFunc = (e: any) => {
		setProgress((e.target as EventTarget & HTMLInputElement).value)
	}

	useEffect(() => {
		emitter.on<string>('musicDuration', (data) => {
			console.log(data, 'data')
		})
		emitter.on<string>('musicCurrentTime', (data) => {
			setCurrentTime(data)
		})
	}, [])

	return (
		<Pane marginTop={30} display={'flex'} paddingX={10}>
			<Pane width={50}>{currentTime || '00:00'}</Pane>
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
			<Pane width={50} paddingLeft={10}>
				03:10
			</Pane>
		</Pane>
	)
}

export default ProgressBar
