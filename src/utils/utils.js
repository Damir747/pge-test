import { mockHeader } from "../mock/mock";

/**
 * Join classnames from array to string
 * @param {Array} arr
 * @return {string}
 */
const classname = (...arr) => arr.join(' ');

const parseDate = (strDate) => {
	if (!strDate) {
		return null;
	}
	const [date, time] = strDate.split(' ');
	const [day, month, year] = date.split(/\./i).map(Number);
	const [hour, minute, second] = time.split(/:|\./i).map(Number);
	return new Date(year, month, day, hour, minute, second);
};

function convertDate(inputFormat) {
	function pad(s) { return (s < 10) ? '0' + s : s; }
	var d = new Date(inputFormat)
	return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.') + ' '
		+ [pad(d.getHours()), pad(d.getMinutes() + 1), d.getSeconds()].join(':')
}

const sortArray = (sort) => {
	switch (sort) {
		case mockHeader[0]:
			return ((a, b) => parseDate(a.date) > parseDate(b.date));
		case mockHeader[1]:
			return ((a, b) => a.importance > b.importance);
		case mockHeader[2]:
			return ((a, b) => a.equipment > b.equipment);
		case mockHeader[3]:
			return ((a, b) => a.message > b.message);
		case mockHeader[4]:
			return ((a, b) => a.fellowWorker > b.fellowWorker);
		default:
			return (a, b) => a.date > b.date;
	}
};

export { classname, sortArray, parseDate, convertDate };