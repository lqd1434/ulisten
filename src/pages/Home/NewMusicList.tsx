import React, { useEffect, useState } from 'react'
import NewMusicItem from './NewMusicItem'
import { Box } from '@chakra-ui/react'
import styles from './index.module.scss'
import { getNewMusicList } from '../../request/get'
import { Music } from '../../model/music'

const NewMusicList = () => {
	const [newMusicList, setNewMusicList] = useState<Music[]>()

	useEffect(() => {
		getNewMusicList().then((val) => {
			setNewMusicList(val as Music[])
		})
	}, [])

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
			{newMusicList?.map(({ name, singer }, index) => {
				return <NewMusicItem index={index} name={name} singer={singer} />
			})}
		</Box>
	)
}

export default NewMusicList
