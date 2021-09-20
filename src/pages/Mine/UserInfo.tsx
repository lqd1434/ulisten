import React from 'react'
import styles from './index.module.scss'
import { Flex, Img, Tag, Text } from '@chakra-ui/react'
import { ManIcon } from '../../lib/icons'

const UserInfo = () => {
	return (
		<Flex className={styles.userInfo}>
			<Img className={styles.img} src={'http://47.103.211.10:9090/static/images/avatar.png'} />
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
	)
}

export default UserInfo
