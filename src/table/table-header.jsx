
import { mockHeader } from "../mock/mock";
import { classname } from "../utils/utls";

function TableHeader({ activeSort, handleClick }) {
	return (
		<thead>
			<tr>
				{mockHeader.map((th) => {
					return (
						<td key={th}
							className={classname(
								'th__item',
								activeSort === th ? 'th--active' : ''
							)}
							onClick={() => handleClick(th)}
						>
							{th}{activeSort === th}
						</td>
					);
				})}
			</tr>
		</thead>
	);
}

export default TableHeader;