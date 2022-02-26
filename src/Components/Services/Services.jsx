import React from 'react';
import styles from './Services.module.scss';

export const Services = () => {
	const serviceArr = [
		{
			header: 'Лечение зубов',
			description:
				'Кариес может серьезно разрушить зуб, но профессиональному стоматологу под силу восстановить его в большинстве случаев. По стоимости это в разы дешевле, чем имплантация.',
			link: 'teeth-treatment',
		},
		{
			header: 'Имплантация',
			description:
				'Прежде всего, в нашей клинике имплантация зубов стоит достаточно дешево, по сравнению с большинством частных стоматологий в СПб. Мы направляем средства в развитие клиники, покупку качественного оборудования и материалов.',
			link: 'implants',
		},
		{
			header: 'Диагностика',
			description:
				'Диагностика стоматологических заболеваний является наиболее важным этапом. Процедура позволяет не только установить точную причину болезней, но и предотвратить  возникновение осложнений после проведенной терапии.',
			link: 'diagnostic',
		},
		{
			header: 'Ортодонтия',
			description:
				'Ортодонтия (orthodontics от греч. ortho – «прямой» и лат. dens, dentis – «зуб») — это раздел стоматологии, который занимается причинами, методами профилактики, а также лечением зубочелюстных аномалий.',
			link: 'orthodontics',
		},
		{
			header: 'Детская стоматология',
			description:
				'В детской стоматологической клинике оказывают весь спектр услуг - от лечения и удаления молочных зубов, до установки брекетов и обучению правилам гигиены по уходу за полостью рта.',
			link: 'children-dentist',
		},
		{
			header: 'Протезирование',
			description:
				'В стоматологии лечение и протезирование зубов занимает важное место. В целом, процедура несложна для профессионала, но не все обращаются за лечением сразу после потери или удаления зуба. Это усложняет работу врача по следующим причинам.',
			link: 'prosthetics',
		},
	];
	return (
		<section className={styles.wrap}>
			<div className={styles.container}>
				<h2 className={styles.h2}>Чем мы можем вам помочь</h2>
				<div className={styles.services_wrap}>
					{serviceArr.map((service) => {
						return (
							<Service
								key={service.link}
								header={service.header}
								description={service.description}
							/>
						);
					})}
				</div>
			</div>
			<div className={styles['custom-shape-divider-bottom-1645806509']}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className={styles['shape-fill']}
					></path>
				</svg>
			</div>
		</section>
	);
};

const Service = ({ header, description }) => {
	return (
		<div className={styles.service_wrap}>
			<div className={styles.service_content}>
				<h3 className={styles.h3}>{header}</h3>
				<p className={styles.description}>{description}</p>
			</div>
			<button>Подробнее</button>
		</div>
	);
};
