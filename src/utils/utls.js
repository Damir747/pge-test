import { mockHeader } from "../mock/mock";

/**
 * Join classnames from array to string
 * @param {Array} arr
 * @return {string}
 */
const classname = (...arr) => arr.join(' ');

const sortArray = (sort) => {
	switch (sort) {
		case mockHeader[0]:
			return ((a, b) => a.date > b.date);
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

export { classname, sortArray };