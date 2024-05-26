import { TABS } from "../const";
import { classname } from "../utils/utils";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function Header({ activeTab, handleClick, handleChange, handleSearch }) {

	return (
		<header className="app-header">
			<div className="header-div">
				<Button
					className={classname('tab', activeTab === TABS.TABLE ? 'tab--active' : '')}
					onClick={() => handleClick(TABS.TABLE)}
					label="Таблица"
				/>
				<Button
					className={classname('tab', activeTab === TABS.CARDS ? 'tab--active' : '')}
					onClick={() => handleClick(TABS.CARDS)}
					label="Карточки"
				/>
				<form id="form-search">
					<InputText
						id="input--search"
						className="input__element"
						onChange={(event) => handleChange(event)}
					/>
					<Button
						className="search-button"
						label="Поиск"
						onClick={(evt) => {
							evt.preventDefault();
							handleSearch();
						}}
					/>
				</form>
			</div>
		</header>);
}

export default Header;