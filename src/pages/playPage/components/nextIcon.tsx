import React, { useState } from 'react'
import styles from './index.module.scss'
import nextIcon from '/src/static/icons/next.svg'
import clsx from 'clsx'
import { emitter } from '../../../utils/EventEmiter'

const NextIcon = () => {
	const [nextAni, setNextAni] = useState('')
	const handleClick = () => {
		setNextAni('animate__shakeX')
		setTimeout(() => {
			setNextAni('')
		}, 300)
		emitter.emit<number>('changeMusic', 3)
	}

	return (
		<div className={styles.iconBgForBoth}>
			<div className={styles.bothIconOuter} onClick={handleClick}>
				<div className={styles.bothIconInner}>
					<img
						src={nextIcon}
						className={clsx([nextAni, styles.bothIcon, 'animate__animated'])}
						alt={''}
					/>
				</div>
			</div>
		</div>
	)
}
export default NextIcon
