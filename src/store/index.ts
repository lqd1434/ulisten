import create from 'zustand'
import { MusicStoreProp } from './interface'

export const useMusicPlayStore = create<MusicStoreProp>((set) => ({
	duration: 0,
	currentTime: 0,
	setDuration: (duration) => set((state) => ({ duration })),
	setCurrentTime: (currentTime) => set((state) => ({ currentTime })),
}))
