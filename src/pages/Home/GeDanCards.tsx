import React from 'react'
import styles from './index.module.scss'
import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { GeDanPlayIcon } from '../../lib/icons'

const GeDanCards = () => {
	return (
		<Box mt={'1.1rem'} w={'95vw'} h={'35vw'} className={styles.numuiCollapse} p={4}>
			<SimpleGrid justifyItems={'center'} columns={3} mt={1}>
				<Box className={styles.numui} h={'25vw'} w={'25vw'} position={'relative'}>
					<Image
						borderRadius={'20px'}
						boxSize={'25vw'}
						src="http://47.103.211.10:9090/static/images/bg_login.jpg"
						objectFit={'cover'}
						alt="Segun Adebayo"
					/>
					<Flex bottom={2} left={2} position={'absolute'} color={'white'} alignItems={'center'}>
						<GeDanPlayIcon />
						<Text fontWeight={500}>1286.9万</Text>
					</Flex>
				</Box>
				<Box className={styles.numui} h={'25vw'} w={'25vw'} position={'relative'}>
					<Image
						borderRadius={'20px'}
						boxSize={'25vw'}
						src="http://47.103.211.10:9090/static/images/bgcube.png"
						objectFit={'cover'}
						alt="Segun Adebayo"
					/>
					<Flex bottom={2} left={2} position={'absolute'} color={'white'} alignItems={'center'}>
						<GeDanPlayIcon />
						<Text fontWeight={500}>1286.9万</Text>
					</Flex>
				</Box>
				<Box className={styles.numui} h={'25vw'} w={'25vw'} position={'relative'}>
					<Image
						borderRadius={'20px'}
						boxSize={'25vw'}
						src="http://47.103.211.10:9090/static/images/bg_login_header.png"
						objectFit={'cover'}
						alt="Segun Adebayo"
					/>
					<Flex bottom={2} left={2} position={'absolute'} color={'white'} alignItems={'center'}>
						<GeDanPlayIcon />
						<Text fontWeight={500}>1286.9万</Text>
					</Flex>
				</Box>
			</SimpleGrid>
		</Box>
	)
}

export default GeDanCards
