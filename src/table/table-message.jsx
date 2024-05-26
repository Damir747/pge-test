function TableMessage({ str, searchStr }) {
	const adaptedSearchStr = searchStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	let strRegex = `(`;
	for (let i = 0; i < adaptedSearchStr.length - 1; i++) {
		if (adaptedSearchStr[i] === `\\`) {
			strRegex += `\\`;
		} else {
			if (adaptedSearchStr[i] === ' ') {
				strRegex += `\\s`;
			} else {
				strRegex += `${adaptedSearchStr[i]}`;
			}
			strRegex += `(<\.*>)*`;
		}
	}
	strRegex += `${adaptedSearchStr[adaptedSearchStr.length - 1]})`;
	const regex = new RegExp(strRegex, 'g');

	const result = str.match(regex);
	const arr = str.split(regex).filter(el => el);

	if (result) {
		return (
			<>
				{arr.map((el, i) =>
					(el === result[0]) ? <span key={i} className="search-results">{el}</span> : <span key={i}>{el}</span>
				)}

			</>
		);
	}
	return str;
}

export default TableMessage;