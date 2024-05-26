import { TIME_TO_GET_DATA } from "../const";
import { mockData } from "../mock/mock";

async function getData(_url) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(mockData), mockData.length * TIME_TO_GET_DATA)
	});
}

export default getData;