import React, { useEffect, useState } from "react";
import CurrencyOptions from "../CurrencyOptions/CurrencyOptions";
import styles from "./CurrencyForm.module.css";


export const CurrencyForm = () => {
	const [currencyOptions, setCurrencyOptions] = useState([]);
	const [fromAmount, setFromAmount] = useState(0);
	const [toAmount, setToAmount] = useState(0);
	const [fromCurrency, setFromCurrency] = useState("");
	const [toCurrency, setToCurrency] = useState("");
	const [currencyNames, setCurrencyNames] = useState({});

	useEffect(() => {
		fetch(`https://api.frankfurter.app/currencies`)
			.then((res) => res.json())
			.then((data) => {
				setCurrencyOptions(data);
				setFromCurrency(Object.keys(data)[0]);
				console.log(data, "data");
				setToCurrency(Object.keys(data)[0]);
				setCurrencyNames(data);
			});
	}, []);

	useEffect(() => {
		if (parseInt(fromAmount) === 0) {
			setToAmount(0);
		} else if (fromAmount === "") {
			setToAmount("");
		} else if (fromCurrency === toCurrency) {
			setToAmount(fromAmount);
		} else {
			fetch(
				`https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`,
			)
				.then((res) => res.json())
				.then((data) => setToAmount(Object.values(data.rates)[0]));
		}
	}, [fromCurrency, toCurrency, fromAmount, toAmount]);
	
	return (
		<div className={styles.form}>
			<div className={styles.formContainer}>
				<div className={styles.item1}>
					<div className={styles.opt_1}>
						<h2>From Currency : </h2>
						<CurrencyOptions
							prop='From currency'
							fromCurrency={fromCurrency}
							currencyOptions={currencyOptions}
							updateCurrency={(e) =>
								setFromCurrency(e.target.value)
							}
						/>
					</div>
					<div className={styles.opt_2}>
						<h2>To Currency : </h2>
						<CurrencyOptions
							prop='To currency'
							toCurrency={toCurrency}
							currencyOptions={currencyOptions}
							updateCurrency={(e) =>
								setToCurrency(e.target.value)
							}
						/>
					</div>
				</div>
				<div className={styles.item2}>
					<h2>
						Enter Amount in {currencyNames[`${fromCurrency}`]} :{" "}
					</h2>
					<h2>Output in {currencyNames[`${toCurrency}`]} : </h2>
				</div>
				<div className={styles.item3}>
					<input
						type='number'
						autoComplete='off'
						value={fromAmount}
						className={styles.input}
						onChange={(e) => setFromAmount(e.target.value)}
					/>
					<h3>=</h3>
					<input
						className={styles.output}
						disabled
						value={toAmount}
						type='text'
					/>
				</div>
				<div className={styles.item4}>
					<h2>
						{fromAmount} {fromCurrency} = {toAmount} {toCurrency}
					</h2>
				</div>
			</div>
		</div>
	);
};
