export default function Tr(props) {
	return (
		<tr>
			<td>
				<div>
					{(props.country.flag ? props.country.flag + " " : "") +
						props.country.name}
				</div>
			</td>
			<td>
				{props.country.capital
					? props.country.capital.map((capital, i) => (
							<div key={i}>{capital}</div>
					  ))
					: null}
			</td>

			<td>{props.country.population.toLocaleString("de-CH")}</td>
			{props.country.currencies ? (
				<td>
					{Object.keys(props.country.currencies).map((key, i) => (
						<div key={i}>
							{props.country.currencies[key].name +
								(props.country.currencies[key].symbol
									? ` (${props.country.currencies[key].symbol})`
									: null)}
						</div>
					))}
				</td>
			) : (
				<td />
			)}
		</tr>
	);
}
