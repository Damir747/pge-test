import { useState } from "react";
import TableHeader from "./table-header";
import TableRows from "./table-rows";
import { defaultSort, defaultSortWay } from '../utils/const.js';
import { mockHeader } from "../mock/mock.js";

function Table({ searchStr, filterStr }) {
	const [sort, setSort] = useState(mockHeader[defaultSort]);
	// const [sortWay, setSortWay] = useState(defaultSortWay);

	return (
		<table>
			<TableHeader
				activeSort={sort}
				handleClick={setSort}
			/>
			<TableRows
				sort={sort}
				searchStr={searchStr}
				filterStr={filterStr}
			/>
		</table>
	);
}

export default Table;