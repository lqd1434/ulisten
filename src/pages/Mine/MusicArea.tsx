import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import styles from './index.module.scss'
import { HeartIcon, TimeIcon } from '../../lib/icons'

const MusicArea = () => {
	return (
		<Flex h={'15vh'} my={3} mx={3} alignItems={'center'} justifyContent={'space-between'}>
			<Flex ml={2} w={'42%'} className={styles.musicCard} alignItems={'center'}>
				<Box p={3}>
					<Box bg={'#F0FCFF'} borderRadius={10} p={3}>
						<HeartIcon />
					</Box>
				</Box>
				<Box flex={1}>
					<Flex flexDirection={'column'} ml={3} color={'#B899FF'} alignItems={'center'} pr={10}>
						<Text fontWeight={500}>喜欢</Text>
						<Text fontSize={14} color={'#B899FF'}>
							127
						</Text>
					</Flex>
				</Box>
			</Flex>
			<Flex w="42%" className={styles.musicCard} mr={5} alignItems={'center'}>
				<Box alignItems={'center'} p={3}>
					<Box bg={'#F0FCFF'} borderRadius={10} p={3}>
						<TimeIcon />
					</Box>
				</Box>
				<Box>
					<Flex flexDirection={'column'} ml={3} color={'#33C1FF'} alignItems={'center'} pr={10}>
						<Text fontWeight={500}>最近</Text>
						<Text fontSize={14} color={'#33C1FF'}>
							127
						</Text>
					</Flex>
				</Box>
			</Flex>
		</Flex>
	)
}

export default MusicArea
