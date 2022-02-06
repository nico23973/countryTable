import TableHeader from "./components/TableHeader";
import styles from "../styles/Countries.module.scss";
import Head from "next/head";

export default function App(props) {
	return (
		<div>
			<Head>
				<title>Countries</title>
			</Head>

			<table className={styles.table}>
				<TableHeader
					titles={["Country", "Capital", "Population", "Currency"]}
				/>

				<tbody>
					{props.countries.map((country, i) => {
						return (
							<tr key={i}>
								<td>
									<div>
										{(country.flag ? country.flag + " " : "") + country.name}
									</div>
								</td>
								<td>
									{country.capital
										? country.capital.map((capital, i) => {
												return <div key={i}>{capital}</div>;
										  })
										: null}
								</td>

								<td>{country.population.toLocaleString("de-CH")}</td>
								{country.currencies ? (
									<td>
										{Object.keys(country.currencies).map((key, i) => {
											return (
												<div key={i} className={styles.currencyContainer}>
													{country.currencies[key].name}
													{country.currencies[key].symbol
														? " (" + country.currencies[key].symbol + ")"
														: null}
												</div>
											);
										})}
									</td>
								) : (
									<td />
								)}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export async function getStaticProps() {
	async function getCountries() {
		const response = await fetch("https://restcountries.com/v3.1/all", {
			method: "get",
			headers: { "Content-Type": "application/json" },
		});

		const data = await response.json();

		const countries = await data.map((country, i) => {
			return {
				flag: country.flag ? country.flag : null,
				name: country.name.common,
				capital: country.capital ? country.capital : null,
				population: country.population,
				currencies: country.currencies
					? Object.keys(country.currencies).map((key) => {
							return {
								name: country.currencies[key].name,
								symbol: country.currencies[key].symbol
									? country.currencies[key].symbol
									: null,
							};
					  })
					: null,
			};
		});

		countries.sort(function (a, b) {
			return b.population - a.population;
		});
		return countries;
	}

	console.log("Static props data fetched");

	return {
		props: {
			countries: await getCountries(),
		},
		revalidate: 60,
	};
}
