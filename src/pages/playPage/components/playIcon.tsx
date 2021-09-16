import React, { useState } from 'react'
import clsx from 'clsx'
import pauseIcon from '/src/static/icons/pause.svg'
import playIcon from '/src/static/icons/play.svg'
import styles from './index.module.scss'
import { emitter } from '../../../utils/EventEmiter'
import { useMusicPlayStore } from '../../../store'

const PlayIcon = () => {
	const { isPlaying } = useMusicPlayStore((state) => state)
	const playClass = clsx([styles.playIcon, 'animate__rotateIn'])
	const pauseClass = clsx([styles.pauseIcon, 'animate__rotateInUpRight'])
	const [playing, setPlaying] = useState(isPlaying)
	const [playAni, setPlayAni] = useState('')

	const handleClick = () => {
		if (playing) {
			emitter.emit<boolean>('toggle', false)
		} else {
			emitter.emit<boolean>('toggle', true)
		}
		setPlayAni('animate__rotateOut')
		setTimeout(() => {
			setPlaying(!playing)
			setPlayAni('')
		}, 200)
	}

	let iconClass = clsx(['animate__animated', playing ? pauseClass : playClass, playAni])

	return (
		<div className={styles.iconBgForCenter}>
			<div className={styles.playIconOuter} onClick={handleClick}>
				<div className={styles.playIconInner}>
					<img src={playing ? pauseIcon : playIcon} className={iconClass} alt={''} />
				</div>
			</div>
		</div>
	)
}

export default PlayIcon
