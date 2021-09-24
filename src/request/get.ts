import axios from 'axios'
import '../mock/getMock'

export const getNewMusicList = () => {
	return new Promise((resolve) => {
		axios.get('/api/newMusicList').then((val) => {
			resolve(val.data)
		})
	})
}
