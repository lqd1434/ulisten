import create from 'zustand'
import { MusicList, MusicListItem, MusicStoreProp } from './interface'

export const useMusicPlayStore = create<MusicStoreProp>((set) => ({
	duration: 0,
	currentTime: 0,
	isPlaying: false,
	setDuration: (duration) => set(() => ({ duration })),
	setCurrentTime: (currentTime) => set(() => ({ currentTime })),
	setIsPlaying: (isPlaying) => set(() => ({ isPlaying })),
}))

export const useMusicListStore = create<MusicList>((set) => ({
	musicList: [],
	addMusic: (item) => set((state) => ({ musicList: [...state.musicList, item] })),
	addAllMusic: (items) => set((state) => ({ musicList: [...state.musicList, ...items] })),
	deleteMusic: (item) =>
		set((state) => {
			let tempList: MusicListItem[] = [...state.musicList]
			tempList.forEach((val, index) => {
				if (val.musicName === item.musicName) {
					tempList.splice(index, 1)
				}
			})
			return { musicList: [...tempList] }
		}),
	deleteAllMusic: () => set(() => ({ musicList: [] })),
	setMusicList: (items) => set(() => ({ musicList: [...items] })),
}))


