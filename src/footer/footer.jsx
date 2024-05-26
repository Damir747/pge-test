import { Button } from 'primereact/button';

function Footer({ nav = null, disable, onNextPageClick, onPrevPageClick }) {

	const handleNextPageClick = () => {
		onNextPageClick();
	};
	const handlePrevPageClick = () => {
		onPrevPageClick();
	};

	return (
		<footer className="app-footer">
			<div className='pagination__div' >
				<Button
					className='pagination__left'
					type="button"
					onClick={handlePrevPageClick}
					disabled={disable.left}
					label='<'
				/>
				{
					nav && (
						<span className='pagination__nav' >
							{nav.current} / {nav.total}
						</span>
					)}
				<Button
					className='pagination__right'
					type="button"
					onClick={handleNextPageClick}
					disabled={disable.right}
					label='>'
				/>
			</div>
		</footer>);
}

// type FooterProps = {
// 	onNextPageClick: () => void;
// 	onPrevPageClick: () => void;
// 	disable: {
// 		left: boolean;
// 		right: boolean;
// 	};
// 	nav?: {
// 		current: number;
// 		total: number;
// 	};
// };

export default Footer;

