import React, { SyntheticEvent, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx'

interface IconProps {
	size?: number | string
	color?: string
}

interface TextIconProps {
	title?: string
	icon?: React.ReactNode
	color?: string
	route?: string
}

export const TextIcon: React.FC<TextIconProps> = ({
	icon,
	title = '',
	color = 'white',
	route = '',
}) => {
	const history = useHistory()
	const [ani, setAni] = useState('')

	const renderIcon = () => {
		return <Box>{icon}</Box>
	}

	const handleClick = (e: SyntheticEvent) => {
		setAni('animate__bounce')
		history.push(route)
		setTimeout(() => {
			setAni('')
		}, 500)
	}

	return (
		<Flex
			flexDirection="column"
			className={clsx(['animate__animated', ani])}
			alignItems="center"
			onClick={handleClick}
		>
			{renderIcon()}
			<Box fontSize={'15px'} color={color} pt={1} fontWeight={'500'}>
				{title}
			</Box>
		</Flex>
	)
}

export const HomeIcon: React.FC<IconProps> = ({ size = 25, color }) => {
	return (
		<svg
			d="1631602470854"
			className="icon"
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			p-id="45159"
			width={size}
			height={size}
		>
			<path
				d="M960 603.648l-448-383.36-448 383.36L64 447.296 512 64l448 383.296L960 603.648zM848 589.632 848 960l-224 0 0-246.848-224 0L400 960l-224 0L176 589.632 512 311.872 848 589.632z"
				p-id="45160"
				fill={color}
			/>
		</svg>
	)
}
export const BackIcon: React.FC<IconProps> = ({ size = 25 }) => {
	return (
		<svg
			d="1631599087572"
			className="icon"
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			p-id="30058"
			width={size}
			height={size}
		>
			<path
				d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z"
				p-id="30059"
				fill="#ffffff"
			/>
		</svg>
	)
}
export const GeDanIcon: React.FC<IconProps> = ({ size = 25, color }) => {
	return (
		<svg
			d="1631602277433"
			className="icon"
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			p-id="42965"
			width={size}
			height={size}
		>
			<path
				d="M796.2 64.2H228c-55.2 0-100 44.8-100 100v695.3c0 55.2 44.8 100 100 100h568.1c55.2 0 100-44.8 100-100V164.2c0.1-55.2-44.7-100-99.9-100zM265.4 265.3c5.8-5.8 13.8-9.4 22.6-9.4h320c17.7 0 32 14.3 32 32 0 8.9-3.6 16.9-9.4 22.7-5.8 5.8-13.8 9.4-22.6 9.4H288c-17.7 0-32-14.3-32-32 0-8.9 3.6-16.9 9.4-22.7z m0 192c5.8-5.8 13.8-9.4 22.6-9.4h320c17.7 0 32 14.3 32 32 0 8.8-3.6 16.8-9.4 22.6-5.8 5.8-13.8 9.4-22.6 9.4H288c-17.7 0-32-14.3-32-32 0-8.8 3.6-16.8 9.4-22.6z m173.3 237.3c-5.8 5.8-13.8 9.4-22.6 9.4h-128c-17.7 0-32-14.3-32-32 0-8.8 3.6-16.8 9.4-22.6s13.8-9.4 22.6-9.4h128c17.7 0 32 14.3 32 32 0 8.8-3.6 16.8-9.4 22.6zM866 481c-17.2 20.6-47.2 31.8-78.9 26.9-20-3.1-37.3-12-50-24.5l-42.8 276.7c-0.4 2.6-1.3 5.1-2.6 7.3 0.3 4.2 0.2 8.5-0.5 12.8-6.5 42-59.1 68.7-117.6 59.6-58.4-9.1-100.5-50.4-94-92.4 6.5-42 59.1-68.7 117.6-59.6 24.8 3.9 46.7 13.5 63.2 26.6L706.9 414c1.6-10.2 10.4-17.4 20.4-17.2 0.9 0 1.8 0.1 2.7 0.2 3 0.5 5.7 1.6 8.1 3.1 1.1 10.3 3.8 20.3 8 29.5 5.1 14.2 15.2 27 28.7 36.4 11.1 7.8 24.6 13.4 39.4 15.7 21.3 3.3 41.8-0.7 58.1-9.8-1.8 3.4-3.9 6.3-6.3 9.1z"
				p-id="42966"
				fill={color}
			/>
		</svg>
	)
}
export const TopIcon: React.FC<IconProps> = ({ size = 25, color }) => {
	return (
		<svg
			d="1631602571224"
			className="icon"
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			p-id="49451"
			width={size}
			height={size}
		>
			<path
				d="M145.5 776.7H288c22.5 0 40.7-18.2 40.7-40.7V430.5c0-22.5-18.2-40.7-40.7-40.7H145.5c-22.5 0-40.7 18.2-40.7 40.7V736c-0.1 22.5 18.2 40.7 40.7 40.7zM450.9 776.7h142.5c22.5 0 40.7-18.2 40.7-40.7V104.7c0-22.5-18.2-40.7-40.7-40.7H450.9c-22.5 0-40.7 18.2-40.7 40.7V736c0 22.5 18.2 40.7 40.7 40.7zM736 776.7h142.5c22.5 0 40.7-18.2 40.7-40.7V288c0-22.5-18.2-40.7-40.7-40.7H736c-22.5 0-40.7 18.2-40.7 40.7v448c0 22.5 18.2 40.7 40.7 40.7zM64 837.8h896V960H64z"
				fill={color}
				p-id="49452"
			/>
		</svg>
	)
}
export const UserIcon: React.FC<IconProps> = ({ size = 25, color }) => {
	return (
		<svg
			d="1631602006101"
			className="icon"
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			p-id="41460"
			width={size}
			height={size}
		>
			<path
				d="M621.354667 569.002667H402.773333c-187.093333 0-338.730667 146.773333-338.730666 327.850666v21.12c0 73.898667 151.637333 74.026667 338.773333 74.026667h218.453333c187.008 0 338.773333-2.688 338.773334-74.026667v-21.12c0.128-181.077333-151.637333-327.850667-338.645334-327.850666z m-104.405334-37.162667c140.416 0 254.208-111.872 254.208-249.856 0-138.026667-113.792-249.984-254.208-249.984-140.373333 0-254.08 111.872-254.08 249.856s113.792 249.984 254.08 249.984z"
				fill={color}
				p-id="41461"
			/>
		</svg>
	)
}
export const ThumbIcon: React.FC<IconProps> = ({ size = 25, color = '#FF3333' }) => {
	return (
		<svg
			d="1631687782533"
			className="icon"
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			p-id="50270"
			width="16"
			height="16"
		>
			<path
				d="M512 128v450.133333A170.666667 170.666667 0 1 0 597.333333 725.333333V298.666667h170.666667V128z"
				p-id="50271"
				fill={color}
			/>
		</svg>
	)
}
