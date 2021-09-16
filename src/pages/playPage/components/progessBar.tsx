import React, { useState } from 'react'
import { emitter } from '../../../utils/EventEmiter'
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import { useMusicPlayStore } from '../../../store'
import { getCurrentTime } from '../../../utils/getCurrentTime'
import { ThumbIcon } from '../../../lib/icons'

const ProgressBar = () => {
	const { currentTime, duration, setCurrentTime } = useMusicPlayStore((state) => state)
	const [time, setTime] = useState(0)

	const onChange = (value: number) => {
		setTime(value)
		setCurrentTime(Math.round(value))
	}

	const onChangeEnd = (value: number) => {
		if (value !== time) {
			emitter.emit<number>('currentTime', time)
		} else {
			emitter.emit<number>('currentTime', value)
		}
	}

	return (
		<Flex marginTop={30} paddingX={'5px'}>
			<Box w={50} mr={2}>
				{getCurrentTime(currentTime) || '00:00'}
			</Box>
			<Slider
				flex={1}
				width={'58vw'}
				min={0}
				max={duration}
				onChange={onChange}
				onChangeEnd={onChangeEnd}
				value={currentTime}
				aria-label="slider-ex-4"
				colorScheme="pink"
				defaultValue={30}
			>
				<SliderTrack bgColor="#FCB59A">
					<SliderFilledTrack bg="#F74906" />
				</SliderTrack>
				<SliderThumb
					boxSize={5}
					_focus={{ boxShadow: 'none' }}
					id={'44'}
					outline={'none'}
					boxShadow={'none'}
					border={'none'}
				>
					<Box as={ThumbIcon} />
				</SliderThumb>
			</Slider>
			<Box pl={3}>{getCurrentTime(duration) || '00:00'}</Box>
		</Flex>
	)
}

export default ProgressBar
