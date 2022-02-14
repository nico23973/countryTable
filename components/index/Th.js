import { useState } from "react";
import { uiIsShownData } from "./TableHeader";

export default function Th(props) {
	const [uiIsShown, setUiIsShown] = useState(uiIsShownData);
	const [rand, setRand] = useState(uiIsShownData);

	function toggleUiIsShown(state) {
		console.log(uiIsShown);
		let newValue = uiIsShown;
		uiIsShown[props.name] = state;
		setUiIsShown(uiIsShown);
		setRand(Math.random());
		console.log(uiIsShown);
	}

	return (
		<th
			onMouseEnter={() => {
				toggleUiIsShown(true);
			}}
			onMouseLeave={() => {
				toggleUiIsShown(false);
			}}
		>
			<strong>{props.name}</strong>
			{uiIsShown[props.name] ? <p>hello</p> : null}
		</th>
	);
}
