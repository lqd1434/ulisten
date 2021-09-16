export interface MusicStoreProp {
	duration: number
	currentTime: number
	isPlaying: boolean
	setDuration: (duration: number) => void
	setCurrentTime: (currentTime: number) => void
	setIsPlaying: (isPlaying: boolean) => void
}

export interface MusicListItem {
	musicName: string
	singer: string
	love?: boolean
}

export interface MusicList {
	musicList: MusicListItem[]
	addMusic: (item: MusicListItem) => void
	addAllMusic: (items: MusicListItem[]) => void
	deleteMusic: (item: MusicListItem) => void
	deleteAllMusic: () => void
	setMusicList: (items: MusicListItem[]) => void
}
