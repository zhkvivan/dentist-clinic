import React from 'react';
import { Banner } from './Components/Banner/Banner';
import { Doctors } from './Components/Doctors/Doctors';
import { Hero } from './Components/Hero/Hero';
import { Features } from './Components/Features/Features';
import { Services } from './Components/Services/Services';
import { Reviews } from './Components/Reviews/Reviews';
import { QnA } from './Components/QnA/QnA';
import { Map } from './Components/Map/Map';

const App = () => {
	return (
		<>
			<Hero />
			<Features />
			<Doctors />
			<Banner />
			<Services />
			<Reviews />
			<QnA />
			<Map />
		</>
	);
};

export default App;
