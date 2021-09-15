export interface MusicStoreProp {
	duration: number
	currentTime: number
	setDuration: (duration: number) => void
	setCurrentTime: (currentTime: number) => void
}
