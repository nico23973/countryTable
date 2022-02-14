import styles from "./TableHeader.module.scss";
import Th from "./Th";
<<<<<<< HEAD

function TableHeader(props) {
=======
import { useState } from "react";

function TableHeader(props) {
	let data = {};
	props.names.forEach((name) => {
		data[name] = false;
	});
	let [uiIsShown, setUiIsShown] = useState(data);

>>>>>>> customColumns
	return (
		<thead className={styles.tableHeader}>
			<tr>
				{props.names.map((name, i) => {
					return (
						<Th
							name={name}
							key={i}
							uiIsShown={uiIsShown}
							setUiIsShown={setUiIsShown}
						/>
					);
				})}
			</tr>
		</thead>
	);
}

export default TableHeader;
