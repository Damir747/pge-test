import { useEffect, useState } from "react";
import { mockData, mockHeader } from "../mock/mock";
import { classname, sortArray } from "../utils/utls";
import TableMessage from "../table/table-message";
import { defaultSort } from "../utils/const";

function Cards({ searchStr, filterStr }) {
	const tableData = mockData;
	const sort = mockHeader[defaultSort];
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
	}, [activeRow, shownTableData]);

	useEffect(() => {
		let temp = tableData.slice(0, 5);
		if (filterStr !== '') {
			temp = temp.filter(el => el.message.includes(filterStr));
		}
		temp.sort(sortArray(sort));
		setShownTableData(temp);
	}, [filterStr])

	return (
		<div className="container__cards">
			{shownTableData.map(({ id, date,
				importance,
				equipment,
				message,
				avatar,
				fellowWorker,
				unread }) => {
				return (
					<div key={id} className={classname(
						'card',
						unread ? 'card__item-unread' : '',
						activeRow === id ? 'card__item--active' : '')}
						onClick={() => setActiveRow(id)}>
						<div className="card__item card__date__title">
							Дата
						</div>
						<div className="card__item card__date__value">
							{date}
						</div>
						<div className="card__item card__importance__title">
							Важность
						</div>
						<div className="card__item card__importance__value">
							{importance}
						</div>
						<div className="card__item card__equipment__title">
							Оборудование
						</div>
						<div className="card__item card__equipment__value">
							{equipment}
						</div>
						<div className="card__item card__message__title">
							Сообщение
						</div>
						<div className="card__item card__message__value">
							<TableMessage
								str={message}
								searchStr={searchStr}
							/>
						</div>
						<div className="card__fellowWorker">
							<div className="div__avatar">
								<img className="avatar" src={avatar} alt={`фотография ${fellowWorker ? fellowWorker : ''}`} />
							</div>
							{fellowWorker}
						</div>
					</div>
				);
			})}

		</div>
	);
}

export default Cards;