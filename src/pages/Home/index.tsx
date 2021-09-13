import { useHistory } from 'react-router-dom'
import React from 'react'
import GeDanIcon from '../../static/icons/gedan.svg'
import UserIcon from '../../static/icons/paihangbang.svg'
import TopIcon from '../../static/icons/yonghu.svg'
import { Box, Center, Flex, Image, Grid } from '@chakra-ui/react'
import { HomeIcon } from '../../lib/icons'

const Home = () => {
	const history = useHistory()
	return (
		<Flex w={'100vw'} h={'100vh'} color="white" flexDirection={'column'}>
			<Center h={'60px'} bg="green.500">
				1
			</Center>
			<Box flex="1" bg="blue.500">
				2
			</Box>
			<Box h={'70px'} bg="tomato" w={'100vw'}>
				<Grid
					templateColumns="repeat(5, 1fr)"
					alignContent={'space-around'}
					alignItems={'center'}
					justifyItems={'center'}
					justifyContent={'space-around'}
				>
					<Center h={'70px'}>
						<HomeIcon />
					</Center>
					<Image src={GeDanIcon} width={35} alt={''} />
					<Image
						src="/src/static/images/cover.jpg"
						boxSize={'50px'}
						borderRadius={'50%'}
						onClick={() => history.push('/play')}
					/>
					<Image src={UserIcon} boxSize={'32px'} />
					<Image src={TopIcon} boxSize={'32px'} />
				</Grid>
			</Box>
		</Flex>
	)
}

export default Home
