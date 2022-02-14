import styles from "./TableHeader.module.scss";
import Th from "./Th";

function TableHeader(props) {
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
