import React, { SyntheticEvent, useEffect, useRef } from 'react'
import { emitter } from '../../utils/EventEmiter'
import musicUrl from '../../static/musics/白鸽 - 你的上好佳.mp3'
import moment from 'moment'
import { getCurrentTime } from '../../utils/getCurrentTime'

const Audio = () => {
	const audioRef = useRef<HTMLAudioElement>(null)

	useEffect(() => {
		emitter.on<boolean>('toggle', (isPlay) => {
			if (audioRef.current!.readyState >= 3) {
				// console.log(audioRef.current!.duration)
				// console.log(moment('0' + Math.floor(audioRef.current!.duration), 'mm:ss').format('mm:ss'))
				if (isPlay) {
					audioRef.current?.play()
				} else {
					audioRef.current?.pause()
				}
			}
		})
	})
	const throttle = (func: (data?: any) => any, time = 800) => {
		let t: number | null
		return function (e: SyntheticEvent) {
			if (t) return
			t = setTimeout(() => {
				func(e)
				t = null
			}, time)
		}
	}

	const onCanPlay = (e: SyntheticEvent) => {
		const data = getCurrentTime((e.target as HTMLAudioElement).duration)
		console.log(data, '11')
		setTimeout(() => {
			emitter.emit<string>('musicDuration', data)
		}, 1500)
	}

	const onTimeUpdate = (e: SyntheticEvent) => {
		const data = getCurrentTime((e.target as HTMLAudioElement).currentTime)
		emitter.emit<string>('musicCurrentTime', data)
	}

	return (
		<audio
			ref={audioRef}
			onTimeUpdate={throttle(onTimeUpdate)}
			onCanPlay={onCanPlay}
			src={musicUrl}
		/>
	)
}

export default Audio
