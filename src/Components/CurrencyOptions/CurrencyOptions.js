import styles from "./CurrencyOptions.module.css";
import React from "react";

function CurrencyOptions({
	prop,
	fromCurrency,
	toCurrency,
	currencyOptions,
	updateCurrency,
}) {
	const currency = Object.keys(currencyOptions);

	const options = currency.map((data, index) => {
		return (
			<option key={index} value={data}>
				{data}
			</option>
		);
	});
	return (
		<>
			{prop === "From currency" ? (
				<select
					name='currency'
					className={prop}
					value={fromCurrency}
					onChange={updateCurrency}
				>
					{options}
				</select>
			) : (
				prop === "To currency" && (
					<select
						name='currency'
						className={prop}
						value={toCurrency}
						onChange={updateCurrency}
					>
						{options}
					</select>
				)
			)}
		</>
	);
}

export default CurrencyOptions;
