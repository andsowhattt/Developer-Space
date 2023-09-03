import React, { useEffect, useState } from 'react';
import Preloader from './assets/Preloader';
import Home from './components/Home';
import Creativity from './components/Creativity';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow-y: auto;
	scrollbar-width: none;
	color: white;
	background: url("./img/bg.jpg");
	background-size: cover;
	&::-webkit-scrollbar {
		display: none;
	}
`;

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		Promise.all([
		]).then(() => {
			setLoading(false);
		}).catch((error) => {
			console.error("Error loading resources:", error);
			setLoading(false); 
		});
	}, []);

	return (
		loading ? (
			<Preloader />
		) : (
			<Container>
				<Home />
				<Creativity />
				<Skills />
				<Contacts />
			</Container>
		)
	);
}

export default App;