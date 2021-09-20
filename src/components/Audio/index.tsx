import React, { SyntheticEvent, useEffect, useRef } from 'react'
import { emitter } from '../../utils/EventEmiter'
import { useMusicPlayStore } from '../../store'

const musicUrl1 = 'http://47.103.211.10:9090/static/musics/baige.mp3'
const musicUrl2 = 'http://47.103.211.10:9090/static/musics/buru.mp3'
const musicUrl3 = 'http://47.103.211.10:9090/static/musics/shanbian.mp3'
const musicUrl4 = 'http://47.103.211.10:9090/static/musics/shiguangbeimian.mp3'
const musicList = [musicUrl1, musicUrl2, musicUrl3, musicUrl4]

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
