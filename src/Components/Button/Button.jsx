import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ label }) => {
	return (
		<div className={styles.wrap}>
			<div className={styles.button}></div>
			<span className={styles.text}>{label}</span>
		</div>
	);
};
