import { useState } from "react";
import { TIME_TO_GET_DATA } from "../const";

function Loading() {
	const [progress, setProgress] = useState('Loading');

	setInterval(() => {
		setProgress(progress.concat('.'));
	}, TIME_TO_GET_DATA);


	return (
		<div>
			{progress}
		</div >
	);
}

export default Loading;