import React, { Fragment, useEffect } from 'react'
import {
	Box,
	Divider,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import { emitter } from '../../../utils/EventEmiter'
import DrawerMusicItem from './DrawerMusicItem'
import { useMusicListStore } from '../../../store'

const DrawerList = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { musicList } = useMusicListStore((state) => state)

	useEffect(() => {
		emitter.on<boolean>('openDrawer', (data) => {
			onOpen()
		})
	}, [])

	return (
		<Box>
			<Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent h={'70vh'} borderTopLeftRadius={20} borderTopRightRadius={20}>
					<DrawerHeader>
						<Flex justifyContent={'start'} alignItems={'end'}>
							<Heading fontSize={20}>音乐列表&nbsp; </Heading>
							<Text fontSize={15} color={'#00B0FF'}>
								{`${musicList.length}首`}
							</Text>
						</Flex>
					</DrawerHeader>
					<Divider />
					<DrawerBody>
						{musicList.map(({ musicName, singer }, index) => {
							return (
								<Fragment key={musicName}>
									<DrawerMusicItem musicName={musicName} singer={singer} index={index} />
								</Fragment>
							)
						})}
					</DrawerBody>
					{/*<DrawerFooter>*/}
					{/*	<Button variant="outline" mr={3} onClick={onClose}>*/}
					{/*		Cancel*/}
					{/*	</Button>*/}
					{/*	<Button colorScheme="blue">关闭</Button>*/}
					{/*</DrawerFooter>*/}
				</DrawerContent>
			</Drawer>
		</Box>
	)
}

export default DrawerList
