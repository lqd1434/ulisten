import Mock from 'mockjs'

const Random = Mock.Random

export const newMusicList = Mock.mock('/api/newMusicList', {
	'musicList|15': [{
		name:Random.last(),
		singer:Random.cname(),
	}],
})
