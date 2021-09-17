import React, { SyntheticEvent, useEffect, useRef } from 'react'
import { emitter } from '../../utils/EventEmiter'
const musicUrl1 = '/src/static/musics/白鸽 - 你的上好佳.mp3'
const musicUrl2 = '/src/static/musics/不如 - 秦海清.mp3'
const musicUrl3 = '/src/static/musics/善变 - 王靖雯不胖.mp3'
const musicUrl4 = '/src/static/musics/时光洪流 - 程响.mp3'
const musicList = [musicUrl1, musicUrl2, musicUrl3, musicUrl4]

import { useMusicPlayStore } from '../../store'
import { m } from 'framer-motion'

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

		emitter.on<number>('changeMusic', (data) => {
			audioRef.current!.src = musicList[data]
			audioRef.current?.play()
			setIsPlaying(true)
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
			src={musicUrl1}
		/>
	)
}

export default Audio
