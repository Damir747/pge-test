import { useEffect, useState } from "react";
import { classname, convertDate, parseDate } from "../utils/utils";
import TableMessage from "./table-message";

function TableRows({ shownTableData, changeElement, searchStr }) {
	const [activeRow, setActiveRow] = useState(null);

	useEffect(() => {
		const onKeypress = event => {
			if (event.key === ' ') {
				changeElement(activeRow);
			}
		};
		document.addEventListener('keypress', onKeypress);
		return () => {
			document.removeEventListener('keypress', onKeypress);
		};
	}, [activeRow, shownTableData, changeElement]);

	return (
		<tbody>
			{shownTableData.map(({
				id,
				date,
				importance,
				equipment,
				message,
				fellowWorker,
				unread }) => {

				return (
					<tr key={id} className={classname(
						'tr__item',
						unread ? 'tr__item--unread' : '',
						activeRow === id ? 'tr__item--active' : '')}
						onClick={() => setActiveRow(id)}
					>
						<td>{convertDate(parseDate(date))}</td>
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