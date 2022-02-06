import styles from "../../styles/TableHeader.module.scss";
import Th from "./Th";

function TableHeader(props) {
	return (
		<thead className={styles.tableHeader}>
			<tr>
				<Th name="Country" i="name" />
				<Th name="Capital" i="capital" />
				<Th name="Population" i="population" />
				<Th name="Currency" i="currency.name" />
			</tr>
		</thead>
	);
}

export default TableHeader;
