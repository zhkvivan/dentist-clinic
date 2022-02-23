import React from 'react';
import styles from './Banner.module.scss';

export const Banner = () => {
	return (
		<div className={styles.wrap}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.h2}>Запишитесь на приём сейчас</h2>
					<p>и получите скидку 10% на любую услугу</p>
					<button>Получить скидку</button>
				</div>
			</div>
		</div>
	);
};
