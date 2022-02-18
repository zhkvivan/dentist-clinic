import React from 'react';
import styles from './Hero.module.scss';
import { Button } from '../Button/Button';

export const Hero = () => {
	return (
		<section className={styles.wrap}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>Профессионально позаботимся о вашей улыбке</h1>
					<span className={styles.description}>
						В стоматологической клинике Дельфин
					</span>
					<div className={styles.btn_wrap}>
						<Button label={'Запишитесь уже сегодня'} />
					</div>
				</div>
			</div>
		</section>
	);
};
