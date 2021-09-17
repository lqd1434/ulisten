import React from 'react'
import { Box, Flex, Img, Tab, TabList, Tabs, Tag, Text } from '@chakra-ui/react'
import { HeartIcon, ManIcon, TimeIcon } from '../../lib/icons'

const Mine = () => {
	return (
		<Flex w={'100vw'} h={'calc(100vh - 90px)'} flexDirection={'column'} mt={'1rem'}>
			<Flex
				height={'20vh'}
				alignItems={'center'}
				py={2}
				mx={3}
				bgColor={'beige'}
				borderRadius={'1rem'}
				boxShadow={'0 3px 10px 0 grey'}
			>
				<Img
					ml={3}
					mr={2}
					w={'22vw'}
					height={'22vw'}
					borderRadius={'50%'}
					src={'http://47.103.211.10:9090/static/images/avatar.png'}
				/>
				<Flex flexDirection={'column'} alignItems={'start'} color={'black'}>
					<Text fontWeight={600} fontSize={18} mb={3}>
						不羡仙
					</Text>
					<Flex w={'30vw'} justifyContent={'space-around'}>
						<Tag rounded={'lg'} p={1} bgColor={'#35BAFF'} textAlign={'center'}>
							<ManIcon />
						</Tag>

						<Tag rounded={'lg'} p={1} color={'white'} bgColor={'#9E9EFB'} fontSize={10}>
							LV 7
						</Tag>
						<Tag rounded={'lg'} p={1} bgColor={'#F96D6D'} color={'white'} fontSize={10}>
							伤感
						</Tag>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				my={8}
				mx={3}
				height={'15vh'}
				alignItems={'center'}
				bgColor={'beige'}
				borderRadius={'1rem'}
				boxShadow={'0 3px 10px 0 grey'}
				justifyContent={'space-between'}
			>
				<Flex ml={5} alignItems={'center'} bgColor={'#BD9BFF'} borderRadius={10}>
					<Box alignItems={'center'} p={3}>
						<Box bg={'#F0FCFF'} borderRadius={10} p={3}>
							<HeartIcon />
						</Box>
					</Box>
					<Box>
						<Flex flexDirection={'column'} ml={3} color={'#5F2FFF'} alignItems={'center'} pr={10}>
							<Text fontWeight={500}>喜欢</Text>
							<Text fontSize={14} color={'#3A00FB'}>
								127
							</Text>
						</Flex>
					</Box>
				</Flex>
				<Flex mr={5} alignItems={'center'} bgColor={'#6CA4FC'} borderRadius={10}>
					<Box alignItems={'center'} p={3}>
						<Box bg={'#F0FCFF'} borderRadius={10} p={3}>
							<TimeIcon />
						</Box>
					</Box>
					<Box>
						<Flex flexDirection={'column'} ml={3} color={'#0866FA'} alignItems={'center'} pr={10}>
							<Text fontWeight={500}>最近</Text>
							<Text fontSize={14} color={'#0866FA'}>
								127
							</Text>
						</Flex>
					</Box>
				</Flex>
			</Flex>
			<Box>
				<Tabs
					variant="soft-rounded"
					boxShadow={'0 3px 10px 0 grey'}
					h={'8vh'}
					pl={3}
					display={'flex'}
					borderRadius={'1rem'}
					alignItems={'center'}
					colorScheme="green"
					bgColor={'beige'}
					lazyBehavior={'keepMounted'}
					isLazy
					mx={3}
				>
					<TabList>
						<Tab w={'5rem'}>歌单</Tab>
						<Tab w={'5rem'}>广场</Tab>
					</TabList>
				</Tabs>
			</Box>
			<Box
				bgColor={'beige'}
				mt={5}
				mb={2}
				flex={1}
				mx={3}
				borderRadius={'1rem'}
				overflow={'auto'}
				color={'black'}
			>
				<Box h={'50rem'} bgColor={'beige'}>
					11111
				</Box>
			</Box>
		</Flex>
	)
}

export default Mine
