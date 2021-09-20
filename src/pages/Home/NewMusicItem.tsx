import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { MoreIcon } from '../../lib/icons'
import styles from './index.module.scss'

const NewMusicItem = () => {
	return (
		<Flex my={1} className={styles.newMusicItem} mx={3} pl={1} py={1} mb={4}>
			<Box w={'3rem'} padding={'10px'}>
				1
			</Box>
			<Box flex={1} display={'flex'} flexDirection={'column'}>
				<Box fontSize={16} fontWeight={500} color={'#8F8FFF'}>
					时光洪流
				</Box>
				<Box fontSize={13} color={'#808080'}>
					程响
				</Box>
			</Box>
			<Box w={'3rem'} padding={'10px'}>
				<MoreIcon />
			</Box>
		</Flex>
	)
}

export default NewMusicItem
