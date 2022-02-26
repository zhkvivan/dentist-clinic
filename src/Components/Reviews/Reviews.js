import React from 'react';
import styles from './Reviews.module.scss';

export const Reviews = () => {
	const reviewsArr = [
		{
			// photo:
			name: 'Елена',
			review:
				'Нужно было провести диагностику зубов, Искала долго подходящую клинику. В этой сделали все очень качественно и недрого, что немаловажно. Приду еще раз.',
			selected: false,
		},
		{
			// photo:
			name: 'Игорь',
			review:
				'Нужно было провести диагностику зубов, Искала долго подходящую клинику. В этой сделали все очень качественно и недрого, что немаловажно. Приду еще раз.',
			selected: true,
		},
		{
			// photo:
			name: 'Татьяна',
			review:
				'Нужно было провести диагностику зубов, Искала долго подходящую клинику. В этой сделали все очень качественно и недрого, что немаловажно. Приду еще раз.',
			selected: false,
		},
	];
	return (
		<div className={styles.wrap}>
			<div className={styles.container}>
				<div className={styles.content}>
					{reviewsArr.map((review) => {
						return (
							<div className={styles.review_wrap}>
								<div className={styles.photo}></div>
								<div className={styles.name}>{review.name}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
