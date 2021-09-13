import { Button, Pane } from 'evergreen-ui'
import { useHistory } from 'react-router-dom'
import React from 'react'
import styles from './index.module.scss'
import HomeIcon from '../../static/icons/shouye.svg'
import GeDanIcon from '../../static/icons/gedan.svg'
import UserIcon from '../../static/icons/paihangbang.svg'
import TopIcon from '../../static/icons/yonghu.svg'
import { Box } from '@chakra-ui/react'

const Home = () => {
	const history = useHistory()
	return (
		<Pane className={styles.home}>
			<Pane className={styles.header} height={60}>
				<Box bg="tomato" w="100%" p={4} color="white">
					This is the Box
				</Box>
			</Pane>
			<Pane className={styles.body}>1</Pane>
			<Pane className={styles.bottom} height={70}>
				<img src={HomeIcon} width={30} />
				<img src={GeDanIcon} width={35} />
				<img
					src="/src/static/images/cover.jpg"
					className={styles.img}
					onClick={() => history.push('/play')}
				/>
				<img src={UserIcon} width={32} />
				<img src={TopIcon} width={32} />
			</Pane>
		</Pane>
	)
}

export default Home
