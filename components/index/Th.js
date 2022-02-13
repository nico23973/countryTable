import { useState } from "react";
import { uiIsShownData } from "./TableHeader";

export default function Th(props) {
	const [uiIsShown, setUiIsShown] = useState(uiIsShownData);
	const [rand, setRand] = useState(uiIsShownData);

	function toggleUiIsShown(state) {
		let newValue = uiIsShown;
		newValue[props.name] = state;
		setUiIsShown(newValue);
		setRand(Math.random());
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
