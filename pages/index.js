import Tr from "../components/index/Tr";
import TableHeader from "../components/index/TableHeader";
import Head from "next/head";
import styles from "./index.module.scss";

export default function App(props) {
	return (
		<div>
			<Head>
				<title>Countries</title>
			</Head>

			<table className={styles.table}>
				<TableHeader
					names={["Country", "Capital", "Population", "Currencies"]}
				/>

				<tbody>
					{props.countries.map((country, i) => (
						<Tr country={country} key={i} />
					))}
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

		return data
			.map((country) => ({
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
			}))
			.sort((a, b) => b.population - a.population);
	}

	console.log("Static props data fetched");

	return {
		props: {
			countries: await getCountries(),
		},
		revalidate: 60,
	};
}
