import { useState } from "react";
import { uiIsShownData } from "./TableHeader";

export default function Th(props) {
	const [uiIsShown, setUiIsShown] = useState(uiIsShownData);

	function toggleUiIsShown(state) {
		uiIsShown[props.name] = state;
		setUiIsShown({ ...uiIsShown });
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
