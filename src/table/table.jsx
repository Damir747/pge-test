import TableHeader from "./table-header";
import TableRows from "./table-rows";

function Table({ activeSort, setActiveSort, shownTableData, changeElement, searchStr }) {

	return (
		<table>
			<TableHeader
				activeSort={activeSort}
				handleClick={setActiveSort}
			/>
			<TableRows
				shownTableData={shownTableData}
				changeElement={changeElement}
				searchStr={searchStr}
			/>
		</table>
	);
}

export default Table;