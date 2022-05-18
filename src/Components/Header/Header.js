import React from "react";
import styles from "./Header.module.css";
import currencyIcon from "../../assets/images/currency-icon.png";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerBox}>
				<div className={styles.headerLogoBox}>
					<img
						src={currencyIcon}
						alt='alt'
						className={styles.headerCurrencyIcon}
					/>
					<h1>Currency Converter</h1>
				</div>
				<div className={styles.currency}>
					<div className={styles.currencyUSD}>
						<b>1 USD = 1 AUD </b>
						<p className={styles.currencyValue}> 1.4447 </p>
					</div>
					<div className={styles.currencyUSD}>
						<b>1 USD = 1 AUD</b>
						<p className={styles.currencyValue}> 1.5057 </p>
					</div>
				</div>
			</div>
		</header>
	);
};
