import { format } from "date-fns";

export default function ObjectToQueryString(obj) {
	let ret = []
	Object.keys(obj).map(k => {
		if (obj[k] !== null) {
			const type = Object.prototype.toString.call(obj[k]);
			if (type === '[object String]' && obj[k] !== '') {
				const val = obj[k] || '""'
				ret.push(`${k}=${val}`)
			} else if (type === '[object Date]') {
				ret.push(formatDate(obj[k]))
			}
			else if (type === '[object Object]') {

				const v = Object.keys(obj[k]).filter(i => obj[k][i] !== null && obj[k][i]).map(i => {
					if(Object.prototype.toString.call(obj[k][i]) === "[object Array]")
						return `${obj[k][i].map(e => `${k}.${i}=${e}`).join('&')}`
					return `${k}.${i}=${obj[k][i]}`
				}).join('&')
				ret.push(v);
			} else {
				ret.push(`${k}=${obj[k] !== 0 ? obj[k] : 1}`)
			}
		}
	})
	return encodeURI(ret.filter(i => i !== null && i !== '').join('&'))
}

function formatDate(date) {

	let value: string = format(date, 'yyyy-MM-ddHH:mm:ss.SSSXXX');
	let position = 10;
	value = [value.slice(0, position), 'T', value.slice(position)].join('');
	return value;

}
