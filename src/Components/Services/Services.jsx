import React from 'react';
import styles from './Services.module.scss';
import doctorIcon from '../../SVG/doctor-icon.svg';
import heartRateIcon from '../../SVG/heart-rate-icon.svg';
import scalpelIcon from '../../SVG/scalpel-icon.svg';
import budgetIcon from '../../SVG/budget-icon.svg';

export const Services = () => {
	const ourServices = [
		{
			heading: 'Профессионалы своего дела',
			description:
				'У нас работают выскоквалифицированные врачи, имеющие многолетний опыт работы в лучших клиниках страны',
			icon: doctorIcon,
		},
		{
			heading: 'Европейское оборудование',
			description:
				'Мы используем самое лучшее европейское оборудование, которое зарекомендовало себя в мире медицины',
			icon: heartRateIcon,
		},
		{
			heading: 'Качественные материалы',
			description:
				'Высококачественные лечебные материалы и инструменты в сочетании с опытом наших врачей способны творить чудеса',
			icon: scalpelIcon,
		},
		{
			heading: 'Умеренная цена',
			description:
				'Стоматология “Дельфин” является клиникой средней ценовой категории, не теряя при этом в качестве',
			icon: budgetIcon,
		},
	];
	return (
		<section className={styles.wrap}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2>К вашим услугам</h2>
					<div className={styles.cards_wrap}>
						{ourServices.map((item) => {
							return (
								<Card
									heading={item.heading}
									description={item.description}
									icon={item.icon}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

const Card = ({ heading, description, icon }) => {
	return (
		<div className={styles.card_inner}>
			<img src={icon} alt="Доктор" />
			<div className={styles.card_content}>
				<h3>{heading}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};
