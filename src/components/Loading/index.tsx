import React from 'react'
import styles from './index.module.scss'
import { Center } from '@chakra-ui/react'

const Loading = () => {
	return (
		<Center width={'100vw'} h={'100vh'}>
			<div className={styles.loading}>
				<div className={styles.loadingSquare}>
					<div />
					<div />
				</div>
			</div>
		</Center>
	)
}

export default Loading
