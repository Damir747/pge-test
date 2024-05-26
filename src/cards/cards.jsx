import { useEffect, useState } from "react";
import { classname, convertDate, parseDate } from "../utils/utils";
import TableMessage from "../table/table-message";

function Cards({ shownTableData, changeElement, searchStr }) {
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
						unread ? 'card__item--unread' : '',
						activeRow === id ? 'card__item--active' : '')}
						onClick={() => setActiveRow(id)}>
						<div className="card__item card__date-title">
							Дата
						</div>
						<div className="card__item card__date-value">
							{convertDate(parseDate(date))}
						</div>
						<div className="card__item card__importance-title">
							Важность
						</div>
						<div className={`card__item card__importance-value`}>
							{importance}
						</div>
						<div className="card__item card__equipment-title">
							Оборудование
						</div>
						<div className="card__item card__equipment-value">
							{equipment}
						</div>
						<div className="card__item card__message-title">
							Сообщение
						</div>
						<div className="card__item card__message-value">
							<TableMessage
								str={message}
								searchStr={searchStr}
							/>
						</div>
						<div className="card__fellowWorker">
							<div className="card__fellowWorker-div">
								<img className="fellowWorker-avatar" src={avatar} alt={`фотография ${fellowWorker ? fellowWorker : ''}`} />
							</div>
							<div className="card__fellowWorker-label">{fellowWorker}</div>
						</div>
					</div>
				);
			})}

		</div>
	);
}

export default Cards;