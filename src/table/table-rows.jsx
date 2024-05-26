import { useEffect, useState } from "react";
import { mockData } from "../mock/mock";
import { classname, sortArray } from "../utils/utls";
import TableMessage from "./table-message";


function TableRows({ sort, searchStr, filterStr }) {
	const tableData = mockData;

	const [shownTableData, setShownTableData] = useState(tableData.slice(0, 5)
		.filter(el => el.message.includes(filterStr))
		.sort(sortArray(sort)));
	const [activeRow, setActiveRow] = useState(null);

	useEffect(() => {
		const onKeypress = event => {
			if (event.key === ' ') {
				let temp = tableData.slice(0, 5);
				if (filterStr !== '') {
					temp = temp.filter(el => el.message.includes(filterStr));
				}
				const index = temp.findIndex((el) => el.id === activeRow);
				if (index !== -1 && temp[index]) {
					temp[index].unread = false;
				}
				temp.sort(sortArray(sort));
				setShownTableData(temp);
			}
		};
		document.addEventListener('keypress', onKeypress);
		return () => {
			document.removeEventListener('keypress', onKeypress);
		};
	}, [activeRow, shownTableData, sort]);

	useEffect(() => {
		let temp = tableData.slice(0, 5);
		if (filterStr !== '') {
			temp = temp.filter(el => el.message.includes(filterStr));
		}
		temp.sort(sortArray(sort));
		setShownTableData(temp);
	}, [sort, filterStr])

	return (
		<tbody>
			{shownTableData.map(({ id, date,
				importance,
				equipment,
				message,
				fellowWorker,
				unread }) => {

				return (
					<tr key={id} className={classname(
						'tr__item',
						unread ? 'tr__item-unread' : '',
						activeRow === id ? 'tr__item--active' : '')}
						onClick={() => setActiveRow(id)}
					>
						<td>{date}</td>
						<td>{importance}</td>
						<td>{equipment}</td>
						<td>
							<TableMessage
								str={message}
								searchStr={searchStr}
							/>
						</td>
						<td>{fellowWorker}</td>
					</tr >
				);
			})}
		</tbody >
	);
}

export default TableRows;