import React from 'react'
import { Box, Flex, Tab, TabList, Tabs } from '@chakra-ui/react'
import styles from './index.module.scss'
import UserInfo from './UserInfo'
import MusicArea from './MusicArea'

const Mine = () => {
	return (
		<Flex w={'100vw'} h={'calc(100vh - 96px)'} flexDirection={'column'} mt={'1rem'}>
			<UserInfo />
			<MusicArea />
			<Box>
				<Tabs
					variant="soft-rounded"
					h={'8vh'}
					pl={3}
					display={'flex'}
					alignItems={'center'}
					colorScheme="twitter"
					className={styles.tapHeader}
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
			<Box flex={1} className={styles.tabPanel}>
				<Box h={'50rem'}>11111</Box>
			</Box>
		</Flex>
	)
}

export default Mine
