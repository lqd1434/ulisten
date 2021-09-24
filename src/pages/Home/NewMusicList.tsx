import React, { Fragment, useEffect, useState } from 'react'
import NewMusicItem from './NewMusicItem'
import { Box } from '@chakra-ui/react'
import styles from './index.module.scss'
import { getNewMusicList } from '../../request/get'
import { Music } from '../../model/music'
import ContentLoader from 'react-content-loader'

const NewMusicList = () => {
	const [newMusicList, setNewMusicList] = useState<Music[]>([])

	useEffect(() => {
		getNewMusicList().then((val) => {
			setTimeout(() => {
				setNewMusicList(val as Music[])
			}, 1000)
		})
	}, [])

	if (newMusicList.length === 0) {
		return <MyLoader />
	} else {
		return (
			<Box
				flex={1}
				mt={'1rem'}
				p={2}
				pt={4}
				mb={'1rem'}
				className={styles.numuiCollapse}
				w={'95vw'}
				overflow={'auto'}
			>
				{newMusicList.map(({ name, singer }, index) => {
					return (
						<Fragment key={index}>
							<NewMusicItem index={index} name={name} singer={singer} />
						</Fragment>
					)
				})}
			</Box>
		)
	}
}

const MyLoader = () => (
	<Box
		flex={1}
		mt={'1rem'}
		p={2}
		pt={4}
		mb={'1rem'}
		className={styles.numuiCollapse}
		w={'95vw'}
		overflow={'auto'}
	>
		<ContentLoader
			speed={2}
			width={200}
			height={60}
			viewBox="0 0 400 160"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
			<rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
		</ContentLoader>
	</Box>
)

export default NewMusicList
