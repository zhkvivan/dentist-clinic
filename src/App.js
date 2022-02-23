import React from 'react';
import { Banner } from './Components/Banner/Banner';
import { Doctors } from './Components/Doctors/Doctors';
import { Hero } from './Components/Hero/Hero';
import { Services } from './Components/Services/Services';

const App = () => {
	return (
		<>
			<Hero />
			<Services />
			<Doctors />
			<Banner />
		</>
	);
};

export default App;
