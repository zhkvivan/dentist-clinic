import React from 'react';
import styles from './Doctors.module.scss';
import doctor1 from '../../pics/doctor-1.png';
import doctor2 from '../../pics/doctor-2.png';
import doctor3 from '../../pics/doctor-3.png';
import doctor4 from '../../pics/doctor-4.png';

export const Doctors = () => {
	const doctorsData = [
		{
			img: doctor1,
			name: 'Самойлова Елена Николаевна',
			position: 'Стоматолог-терапевт',
		},
		{
			img: doctor2,
			name: 'Петровский Егор Павлович',
			position: 'Стоматолог-гигиенист',
		},
		{
			img: doctor3,
			name: 'Ковш Ирина Владимировна',
			position: 'Стоматолог-хирург',
		},
		{
			img: doctor4,
			name: 'Михайлов Михаил Михайлович',
			position: 'Стоматолог-стоматолог',
		},
	];
	return (
		<section className={styles.wrap}>
			<div className={styles.container}>
				<h2>Кто будет вас лечить</h2>
				<div className={styles.doctors_wrap}>
					{doctorsData.map((doctor) => {
						return (
							<Doctor
								img={doctor.img}
								name={doctor.name}
								position={doctor.position}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

const Doctor = ({ img, name, position }) => {
	return (
		<div className={styles.doctor_inner}>
			<div className={styles.img_wrap}>
				<img src={img} alt="Доктор" />
				<div className={styles.img_bg}></div>
			</div>
			<div className={styles.doctor_content}>
				<h3>{name}</h3>
				<span className={styles.position}>{position}</span>
			</div>
		</div>
	);
};
