import React, { useState } from 'react';
import styles from './Reviews.module.scss';
import portrait1 from '../../pics/portrait1.png';
import portrait2 from '../../pics/portrait2.png';
import portrait3 from '../../pics/portrait3.png';
import portrait4 from '../../pics/portrait4.png';
import portrait5 from '../../pics/portrait5.png';

export const Reviews = () => {
	const reviewsArr = [
		{
			id: 0,
			photo: portrait1,
			name: 'Елена',
			reviewText:
				'Нужно было провести диагностику зубов, Искала долго подходящую клинику. В этой сделали все очень качественно и недрого, что немаловажно. Приду еще раз.',
			selected: false,
		},
		{
			id: 1,
			photo: portrait2,
			name: 'Игорь',
			reviewText:
				'В принципе неплохая клиника. Цены тоже ниче так. Но как по мне, персонал мог быть и получше)',
			selected: true,
		},
		{
			id: 2,
			photo: portrait3,
			name: 'Татьяна',
			reviewText:
				'Мне всё всегда нравится. Особенно нравится скидка 200 рублей которую мне дали за хороший отзыв! Приду еще!',
			selected: false,
		},
		{
			id: 3,
			photo: portrait4,
			name: 'Олежек',
			reviewText: 'Хорошая шиномонтажка! Ой, не туда.',
			selected: false,
		},
	];

	const [currentReview, setCurrentReview] = useState(reviewsArr[1]);
	return (
		<section className={styles.wrap}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.photos_wrap}>
						{reviewsArr.map((review) => {
							return (
								<div
									className={
										currentReview.id === review.id
											? styles.photo_wrap_selected
											: styles.photo_wrap
									}
									onClick={(e) => {
										setCurrentReview(reviewsArr[review.id]);
									}}
								>
									<img src={review.photo} alt="" className={styles.photo} />
									<div className={styles.photo_bg}></div>
								</div>
							);
						})}
					</div>

					<Slide
						name={currentReview.name}
						reviewText={currentReview.reviewText}
					/>
				</div>
			</div>
		</section>
	);
};

const Slide = ({ photo, name, reviewText }) => {
	return (
		<>
			<div className={styles.review_wrap}>
				<div className={styles.name}>{name}</div>
				<div className={styles.text}>{reviewText}</div>
			</div>
		</>
	);
};
