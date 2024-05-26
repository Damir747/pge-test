import './app.css';
import './styles.css';
import Table from '../table/table';
import Header from '../header/header';
import React, { useState } from 'react';
import Cards from '../cards/cards';
import { TABS } from '../const';

// ? проверить корректность работы при пустых данных
// ? сортировка
// ? фильтрация
// ? подгрузка новых сообщений

function App() {
	const [activeTab, setActiveTab] = useState(TABS.TABLE);
	const [text, setText] = useState('');
	const onChangeText = (event) => {
		setText(event.target.value);
	};

	const [textFilter, setTextFilter] = useState('');

	const handleSearch = () => {
		setTextFilter(text);
	};

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
					searchStr={text}
					filterStr={textFilter}
				/>
				: <Cards
					searchStr={text}
					filterStr={textFilter}
				/>}
		</div>
	);
}

export default App;
