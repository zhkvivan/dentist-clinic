import React from 'react';
import { Doctors } from './Components/Doctors/Doctors';
import { Hero } from './Components/Hero/Hero';
import { Services } from './Components/Services/Services';

const App = () => {
	return (
		<>
			<Hero />
			<Services />
			<Doctors />
		</>
	);
};

export default App;
