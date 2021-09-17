import React, { useEffect, useState } from 'react'
import { Box, Center, Grid } from '@chakra-ui/react'
import { AlbumIcon, GeDanIcon, HomeIcon, TextIcon, TopIcon, UserIcon } from '../../lib/icons'
import { useHistory } from 'react-router-dom'
import { emitter } from '../../utils/EventEmiter'
import { Location } from 'history'

const BottomNav = () => {
	const history = useHistory()
	const [activeRoute, setActiveRoute] = useState(1)

	useEffect(() => {
		setActiveRoute(getStatus(history.location.pathname))
		emitter.on<Location<unknown>>('location', (location) => {
			setActiveRoute(getStatus(location.pathname))
		})
	}, [])

	const getStatus = (path: string) => {
		let code: number
		switch (path) {
			case '/':
				code = 1
				break
			case '/geDan':
				code = 2
				break
			case '/top':
				code = 3
				break
			case '/mine':
				code = 4
				break
			default:
				code = 1
		}
		return code
	}

	const getColor = (code: number): string => {
		let color: string
		if (activeRoute === code) {
			color = '#5E64FF'
		} else {
			color = '#A8A9A8'
		}
		return color
	}

	return (
		<Box
			h={'70px'}
			boxShadow={'0 3px 10px 0 #A68C07'}
			bgColor="#F7DC4F"
			w={'100vw'}
			borderRadius={'1rem 1rem 0 0'}
		>
			<Grid
				templateColumns="repeat(5, 1fr)"
				alignContent={'space-around'}
				alignItems={'center'}
				justifyItems={'center'}
				justifyContent={'space-around'}
			>
				<Center h={'70px'}>
					<TextIcon
						route={'/'}
						icon={<HomeIcon color={getColor(1)} />}
						color={getColor(1)}
						title={'主页'}
					/>
				</Center>
				<TextIcon
					route={'/geDan'}
					icon={<GeDanIcon color={getColor(2)} />}
					title={'歌单'}
					color={getColor(2)}
				/>
				<Box onClick={() => history.push('/play')}>
					<AlbumIcon size={8} />
				</Box>
				<TextIcon
					route={'/top'}
					icon={<TopIcon color={getColor(3)} />}
					title={'榜单'}
					color={getColor(3)}
				/>
				<TextIcon
					route={'/mine'}
					icon={<UserIcon color={getColor(4)} />}
					title={'我的'}
					color={getColor(4)}
				/>
			</Grid>
		</Box>
	)
}

export default BottomNav
