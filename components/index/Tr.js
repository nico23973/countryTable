import { getDisplayName } from "next/dist/shared/lib/utils";

export default function Tr(props) {
	let country = props.country;

	return (
		<tr>
			<td>
				<div>{(country.flag ? country.flag + " " : "") + country.name}</div>
			</td>
			<td>
				{country.capital
					? country.capital.map((capital, i) => <div key={i}>{capital}</div>)
					: null}
			</td>

			<td>{country.population.toLocaleString("de-CH")}</td>
			{country.currencies ? (
				<td>
					{Object.keys(country.currencies).map((key, i) => (
						<div key={i}>
							{country.currencies[key].name +
								(country.currencies[key].symbol
									? ` (${country.currencies[key].symbol})`
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
