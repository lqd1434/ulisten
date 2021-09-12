import React, { useState } from 'react'
import styles from './index.module.scss'
import lastIcon from '/src/static/icons/last.svg'
import clsx from 'clsx'

const LastIcon = () => {
	const [lastAni, setLastAni] = useState('')

	const handleClick = () => {
		setLastAni('animate__shakeX')
		setTimeout(() => {
			setLastAni('')
		}, 300)
	}

	return (
		<div className={styles.iconBgForBoth} onClick={handleClick}>
			<div className={styles.bothIconOuter}>
				<div className={styles.bothIconInner}>
					<img src={lastIcon} className={clsx([lastAni, 'animate__animated', styles.bothIcon])} />
				</div>
			</div>
		</div>
	)
}
export default LastIcon
