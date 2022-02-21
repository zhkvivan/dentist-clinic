import React from 'react';
import styles from './Doctors.module.scss';
import doctor1 from '../../pics/doctor-1.png';

export const Doctors = () => {
	return (
		<section className={styles.wrap}>
			<div className={styles.container}>
				<h2>Кто будет вас лечить</h2>
				<div className={styles.doctors_wrap}>
					<Doctor />
					<Doctor />
					<Doctor />
					<Doctor />
				</div>
			</div>
		</section>
	);
};

const Doctor = ({}) => {
	return (
		<div className={styles.doctor_inner}>
			<img src={doctor1} alt="" />
		</div>
	);
};
