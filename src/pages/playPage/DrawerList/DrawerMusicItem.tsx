import React from 'react'
import { Box, Divider, Flex } from '@chakra-ui/react'
import { DeleteIcon } from '../../../lib/icons'

interface DrawerMusicItemProps {
	index: number | string
	musicName: string
	singer: string
}

const DrawerMusicItem:React.FC<DrawerMusicItemProps> = ({index,musicName,singer}) => {
	return (
		<>
			<Flex my={1}>
				<Box w={'3rem'} padding={'10px'}>
					{(index as number) < 10 ? `0${(index as number)+1}`:`${index}`}
				</Box>
				<Box flex={1} display={'flex'} flexDirection={'column'}>
					<Box fontSize={16} fontWeight={500}>
						{musicName}
					</Box>
					<Box fontSize={13} color={'#808080'}>
						{singer}
					</Box>
				</Box>
				<Box w={'3rem'} padding={'10px'}>
					<DeleteIcon />
				</Box>
			</Flex>
			<Divider />
		</>
	)
}

export default DrawerMusicItem
