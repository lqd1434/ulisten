import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon, Heading, HeartIcon, Pane, VolumeUpIcon } from 'evergreen-ui'
import PlayIcon from './playIcon'
import LastIcon from './lastIcon'
import NextIcon from './nextIcon'
import styles from './layout.module.scss'
import ProgressBar from './progessBar'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import orderIcon from '../../static/icons/suijibofang.svg'
import musicListIcon from '../../static/icons/yinleliebiao.svg'

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
		<Pane className={styles.bg}>
			<Pane
				visibility={isShow ? 'visible' : 'hidden'}
				className={clsx(['animate__animated', ani, styles.con])}
			>
				<Pane className={styles.header}>
					<ChevronLeftIcon
						marginLeft={20}
						onClick={() => history.push('/')}
						size={45}
						backgroundColor={'rgba(244,250,255,0.5)'}
						padding={5}
						color={'#FA6C37'}
						borderRadius={'50%'}
					/>
				</Pane>
				<Pane className={styles.body}>
					<img src="/src/static/images/cover.jpg" alt="11" className={styles.image} />
					<Pane marginTop={-20} className={styles.musicInfo} paddingX={15}>
						<Heading size={800} marginBottom={5}>
							清空
						</Heading>
						<Pane display={'flex'} alignItems={'center'}>
							<Heading size={300} marginRight={10}>
								鹿晗
							</Heading>
							<Heading
								color={'black'}
								size={200}
								backgroundColor={'#F5F5F5'}
								borderRadius={10}
								padding={2}
							>
								关注
							</Heading>
						</Pane>
						<Pane paddingTop={20}>这是一句歌词</Pane>
						<Pane>这又是一句歌词哈哈</Pane>
					</Pane>
					<Pane className={styles.operateMenu} paddingX={20}>
						<HeartIcon size={30} color={'red'} />
						<img src={orderIcon} alt={''} width={30} />
						<VolumeUpIcon size={30} color={'#4646EB'} />
						<img src={musicListIcon} alt={''} width={30} />
					</Pane>
					<Pane height={'5rem'} alignSelf={'center'}>
						<ProgressBar />
					</Pane>
				</Pane>
				<Pane className={styles.bottom}>
					<LastIcon />
					<PlayIcon />
					<NextIcon />
				</Pane>
			</Pane>
		</Pane>
	)
}
export default PlayPage
