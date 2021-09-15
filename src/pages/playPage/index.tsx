import React, { useEffect, useState } from 'react'
import PlayIcon from './playIcon'
import LastIcon from './lastIcon'
import NextIcon from './nextIcon'
import styles from './layout.module.scss'
import ProgressBar from './progessBar'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import orderIcon from '../../static/icons/suijibofang.svg'
import musicListIcon from '../../static/icons/yinleliebiao.svg'
import { Box, Heading, Text } from '@chakra-ui/react'
import HeartIcon from './../../static/icons/xihuan.svg'
import VolumnIcon from './../../static/icons/volumn.svg'
import { BackIcon } from '../../lib/icons'
import imgUrl from '/src/static/images/cover.jpg'

const PlayPage = () => {
	const history = useHistory()
	const [isShow, setShow] = useState(false)
	const [ani, setAni] = useState('')

	useEffect(() => {
		setTimeout(() => {
			setAni('animate__fadeIn')
			setShow(true)
		}, 100)
	}, [])

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
					<img src={imgUrl} alt="11" className={styles.image} />
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
						<img src={HeartIcon} alt={''} width={30} />
						<img src={orderIcon} alt={''} width={30} />
						<img src={VolumnIcon} alt={''} width={30} />
						<img src={musicListIcon} alt={''} width={30} />
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
		</Box>
	)
}
export default PlayPage
