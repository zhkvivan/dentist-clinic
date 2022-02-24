import React from 'react';
import { Banner } from './Components/Banner/Banner';
import { Doctors } from './Components/Doctors/Doctors';
import { Hero } from './Components/Hero/Hero';
import { Features } from './Components/Features/Features';
import { Services } from './Components/Services/Services';

const App = () => {
	return (
		<>
			<Hero />
			<Features />
			<Doctors />
			<Banner />
			<Services />
		</>
	);
};

export default App;
