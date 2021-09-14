import moment from 'moment'

export const getCurrentTime = (time: number): string => {
	let data: string
	let minutes: string = ''
	let seconds: string = ''

	if (time < 10) {
		minutes = '00'
		seconds = '0' + time
	} else if (time < 60) {
		minutes = '00'
		seconds = '' + time
	} else if (time < 60 * 2) {
		minutes = '01'
		seconds = '' + (time - 60)
	} else if (time < 60 * 3) {
		minutes = '02'
		seconds = '' + (time - 60 * 2)
	} else if (time < 60 * 4) {
		minutes = '03'
		seconds = '' + (time - 60 * 3)
	} else if (time < 60 * 5) {
		minutes = '04'
		seconds = '' + (time - 60 * 4)
	} else if (time < 60 * 6) {
		minutes = '05'
		seconds = '' + (time - 60 * 5)
	} else if (time < 60 * 7) {
		minutes = '06'
		seconds = '' + (time - 60 * 6)
	} else {
		alert('太大了')
	}
	data = moment(minutes + seconds, 'mm:ss').format('mm:ss')

	return data
}
