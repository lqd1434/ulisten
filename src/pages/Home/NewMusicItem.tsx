import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { MoreIcon } from '../../lib/icons'
import styles from './index.module.scss'

interface NewMusicItemProps {
	index: number
	name: string
	singer: string
}

const NewMusicItem: React.FC<NewMusicItemProps> = ({ index = 0, name = '', singer = '' }) => {
	return (
		<Flex my={1} className={styles.newMusicItem} mx={3} pl={1} py={1} mb={4}>
			<Box w={'3rem'} padding={'10px'}>
				{index}
			</Box>
			<Box flex={1} display={'flex'} flexDirection={'column'}>
				<Box fontSize={16} fontWeight={500} color={'#FFFFFF'}>
					{name}
				</Box>
				<Box fontSize={13} color={'#C4D6DB'}>
					{singer}
				</Box>
			</Box>
			<Box w={'3rem'} padding={'10px'}>
				<MoreIcon color={'#CBCBF4'} />
			</Box>
		</Flex>
	)
}

export default NewMusicItem
