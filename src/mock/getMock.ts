import Mock from 'mockjs'

const Random = Mock.Random

export const newMusicList = Mock.mock('/api/newMusicList', {
	'musicList|15': [
		{
			'name|1': [Random.last(), Random.first(), Random.name(), Random.name()],
			'singer|1': [Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname()],
		},
	],
})
