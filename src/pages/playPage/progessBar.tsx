import { Pane } from 'evergreen-ui'
import React, { useState } from 'react'

const ProgressBar = () => {
	const [progress, setProgress] = useState('30')
	const stateFunc = (e: any) => {
		setProgress((e.target as EventTarget & HTMLInputElement).value)
	}

	return (
		<Pane marginTop={30} display={'flex'} paddingX={10}>
			<span>00:00</span>&nbsp;&nbsp;
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
			&nbsp;&nbsp;<span>03:10</span>
		</Pane>
	)
}

export default ProgressBar
