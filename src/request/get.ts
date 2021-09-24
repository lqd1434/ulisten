import axios from 'axios'
import '../mock/getMock'
import { Music } from '../model/music'

export const getNewMusicList = () => {
	return new Promise((resolve) => {
		axios.get('/api/newMusicList').then((val) => {
			resolve(val.data.musicList as Music[])
		})
	})
}
