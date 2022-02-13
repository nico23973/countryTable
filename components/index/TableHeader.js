import { useState } from "react";
import styles from "./TableHeader.module.scss";
import Th from "./Th";

export let uiIsShown, setUiIsShown;

function TableHeader(props) {
	let data = [];
	props.names.forEach((name) => {
		data[name] = false;
	});

	[uiIsShown, setUiIsShown] = useState(data);

	console.log(uiIsShown);

	return (
		<thead className={styles.tableHeader}>
			<tr>
				{props.names.map((name, i) => {
					return <Th name={name} key={i} />;
				})}
			</tr>
		</thead>
	);
}

export default TableHeader;
