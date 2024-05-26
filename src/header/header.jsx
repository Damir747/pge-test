import { TABS } from "../const";

function Header({ activeTab, handleClick, handleChange, handleSearch }) {

	return (
		<header className="app-header">
			<div className="header__div">
				<button
					className={activeTab === TABS.TABLE ? 'tab--active' : ''}
					onClick={() => handleClick(TABS.TABLE)}>
					Table
				</button>
				<button
					className={activeTab === TABS.CARDS ? 'tab--active' : ''}
					onClick={() => handleClick(TABS.CARDS)}>
					Cards
				</button>
				<form id="form--search">
					<input
						id="input--search"
						className="input__element"
						onChange={(event) => handleChange(event)}
					/>
					<button
						className="search-button"
						onClick={(evt) => {
							evt.preventDefault();
							handleSearch();
						}}
					>
						Поиск
					</button>
				</form>
			</div>
		</header>);
}

export default Header;