import React, { useState } from 'react';
import styles from './QnA.module.scss';

export const QnA = () => {
	const qnaArr = [
		{
			id: 0,
			q: 'Как записаться на осмотр? Платно ли это?',
			a: 'Записаться на осмотр вы можете по телефону 5940823485, звонок стоит 5 рублей минута. Извините но у нас цены и так дешевые поэтому зарабатываем как можем.',
			isOpened: true,
		},
		{
			id: 1,
			q: 'А правда, что больно?',
			a: 'Нет, не правда. Но если принципиально, то можем сделать. ',
			isOpened: false,
		},
		{
			id: 2,
			q: 'Можно пожалуйста зубы в кредит?',
			a: 'Если очень пожалуйста то можно.',
			isOpened: false,
		},
		{
			id: 3,
			q: 'А ириски у вас продаются?',
			a: 'Извините, с такими вопросами мы вас не примем ',
			isOpened: false,
		},
	];
	const [openedQ, setOpenedQ] = useState(0);

	return (
		<section className={styles.wrap}>
			<div className={styles.container}>
				<h2 className={styles.h2}>Ответы на популярные вопросы</h2>
				{qnaArr.map((element) => {
					return (
						<div
							className={
								openedQ === element.id
									? styles.element_wrap
									: styles.element_wrap_closed
							}
							onClick={() => {
								setOpenedQ(element.id);
							}}
						>
							<div
								className={
									openedQ === element.id
										? styles.question_wrap
										: styles.question_wrap_closed
								}
							>
								<div
									className={
										openedQ === element.id
											? styles.question
											: styles.question_closed
									}
								>
									{element.q}
								</div>
								<div className={styles.button}>
									{openedQ === element.id ? 'x' : '?'}
								</div>
							</div>
							<div
								className={
									openedQ === element.id ? styles.answer : styles.answer_closed
								}
							>
								<p>{element.a}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
