import React, { SyntheticEvent, useEffect, useRef } from 'react'
import { emitter } from '../../utils/EventEmiter'
import musicUrl from '/src/static/musics/白鸽 - 你的上好佳.mp3'

import { useMusicPlayStore } from '../../store'

const Audio = () => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const { setCurrentTime, setDuration, setIsPlaying } = useMusicPlayStore((state) => state)

	useEffect(() => {
		emitter.on<boolean>('toggle', (isPlay) => {
			if (audioRef.current!.readyState >= 3) {
				if (isPlay) {
					audioRef.current?.play()
					setIsPlaying(true)
				} else {
					setIsPlaying(false)
					audioRef.current?.pause()
				}
			}
		})

		emitter.on<number>('currentTime', (data) => {
			audioRef.current!.currentTime = data
		})
	}, [])

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
		setDuration(Math.round((e.target as HTMLAudioElement).duration))
	}

	const onTimeUpdate = (e: SyntheticEvent) => {
		setCurrentTime(Math.round((e.target as HTMLAudioElement).currentTime))
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
