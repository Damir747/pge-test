import './styles.css';
import Table from '../table/table';
import Header from '../header/header';
import React, { useCallback, useEffect, useState } from 'react';
import Cards from '../cards/cards';
import { ROWS_PER_PAGE, TABS } from '../const';
import Footer from '../footer/footer';
import { mockHeader } from '../mock/mock';
import { defaultSort } from "../const";
import { sortArray } from '../utils/utils';
import getData from '../api/api';
import Loading from '../loading/loading';

function App() {
	const [activeTab, setActiveTab] = useState(TABS.TABLE);
	// выделенние найденого текста
	const [text, setText] = useState('');
	const onChangeText = (event) => {
		setText(event.target.value);
	};
	// фильтр по тексту
	const [textFilter, setTextFilter] = useState('');
	const handleSearch = () => {
		setTextFilter(text);
	};
	// сортировка
	const [activeSort, setActiveSort] = useState(mockHeader[defaultSort]);
	// const [sortWay, setSortWay] = useState(defaultSortWay);

	// отметка о прочтении
	const changeElement = (id) => {
		const temp = shownTableData.slice();
		const index = temp.findIndex((el) => el.id === id);
		if (index !== -1 && temp[index]) {
			temp[index].unread = false;
		}
		setShownTableData(temp);
	};

	const [data, setData] = useState(null);		// < RESPONSE_DATA | null >
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);		//< string | null > 

	// отображаемые данные
	const [shownTableData, setShownTableData] = useState(data ? data.slice()
		.filter(el => el.message.includes(''))
		.sort(sortArray(mockHeader[defaultSort]))
		.slice(ROWS_PER_PAGE * (currentPage - 1), ROWS_PER_PAGE * currentPage) : []);

	const [totalPageCount, setTotalPageCount] = useState(1);

	useEffect(() => {
		setShownTableData(data ? data.slice()
			.filter(el => el.message.includes(textFilter))
			.sort(sortArray(activeSort))
			.slice(ROWS_PER_PAGE * (currentPage - 1), ROWS_PER_PAGE * currentPage) : []);
		setTotalPageCount(Math.ceil((data
			? data.slice().filter(el => el.message.includes(textFilter))
			: ['']).length / ROWS_PER_PAGE));
	}, [textFilter, activeSort, currentPage, data]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await getData('');
				setData(response);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : 'Unknown Error: api.get.data'
				);
				setData(null);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const handleNextPageClick = useCallback(() => {
		const next = currentPage + 1;
		setCurrentPage(next <= totalPageCount ? next : currentPage);
	}, [currentPage, totalPageCount]);

	const handlePrevPageClick = useCallback(() => {
		const prev = currentPage - 1;

		setCurrentPage(prev > 0 ? prev : currentPage);
	}, [currentPage]);

	useEffect(() => {
		if (currentPage > totalPageCount) {
			setCurrentPage(totalPageCount);
		}
	}, [totalPageCount, currentPage]);

	if (isLoading) {
		return (
			<Loading />
		);
	}
	return (
		<div className="app">
			<Header
				activeTab={activeTab}
				handleClick={setActiveTab}
				handleChange={onChangeText}
				handleSearch={handleSearch}
			/>
			{activeTab === TABS.TABLE
				? <Table
					activeSort={activeSort}
					setActiveSort={setActiveSort}
					shownTableData={shownTableData}
					changeElement={changeElement}
					searchStr={text}
				/>
				: <Cards
					shownTableData={shownTableData}
					changeElement={changeElement}
					searchStr={text}
				/>}
			<Footer
				nav={{
					current: currentPage,
					total: totalPageCount,
				}}
				disable={{
					left: currentPage === 1,
					right: currentPage === totalPageCount
				}}
				onNextPageClick={handleNextPageClick}
				onPrevPageClick={handlePrevPageClick}
			/>
		</div>
	);
}

export default App;
