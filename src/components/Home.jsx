import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FaMinus } from 'react-icons/fa';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	overflow-x: hidden;

	@media only screen and (max-width: 768px) {
		height: 200vh;
	}
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100%;
	scroll-snap-align: center;
	width: 1400px;
	

	@media only screen and (max-width: 1465px) {
		width: 1000px;
		padding: 10px;
		flex-direction: column;
		gap: 20px;
	}

	@media only screen and (max-width: 1060px) {
		width: 768px;
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`

const Motto = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

	@media only screen and (max-width: 768px) {
		flex: 1;
		align-items: center;
	}
`
const Title = styled.h1`
	font-size: 74px;

	@media only screen and (max-width: 768px) {
		text-align: center;
		font-size: 36px;
	}
`
const Motivation = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

const Line = styled(FaMinus)`
	height: 15px;
	margin-left: 50px;
`

const Subtitle = styled.h2`
	color: #fdb133;
	font-style: italic;
`
const Desc = styled.p`
	font-size: 24px;
	color: lightgray;
	@media only screen and (max-width: 768px) {
		padding: 20px;
		text-align: center;
	}
`
const Button = styled.button`
	background-color: transparent;
	color: white;
	border: 1px solid white;
	font-size: 18px;
	font-weight: 500;
	padding: 10px;
	width: 180px;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

	&:hover {
		background-color: #3d1c56;
		transform: scale(1.05);
	}
`;

const Animation = styled.div`
	flex: 4;
	position: relative;
	width: 100%;

	@media only screen and (max-width: 768px) {
		flex: 1;
		width: 100%;
	}
`
const Img = styled.img`
	width: 800px;
	height: 600px;
	object-fit: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: animate 2s infinite ease alternate;
	pointer-events: none;
	user-drag: none;

	@media only screen and (max-width: 768px) {
		width: 300px;
		height: 300px;
	}

	@keyframes animate {
		to{
			transform: translateY(20px);
		}
	}
`;

const Home = () => {
	const [animationEnabled, setAnimationEnabled] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			const shouldEnableAnimation = windowWidth > 768;
			setAnimationEnabled(shouldEnableAnimation);
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Section id='home'>
			<Navbar />
			<Container>
				<Motto>
					<Title>Imagine. Create. Enjoy.</Title>
					<Motivation>
						<Line />
						<Subtitle>Who Am I?</Subtitle>
					</Motivation>
					<Desc>Being a Frontend Developer, akin to a storyteller of the digital era, I craft a space that resonates and inspires. Take a step into the realm where imagination meets code, where design comes alive, and interfaces narrate stories.</Desc>
					<Button onClick={() => window.open('https://github.com/andsowhattt', '_blank')}>Explore My Work</Button>
				</Motto>
				<Animation>
					<Canvas>
						<OrbitControls enableRotate={animationEnabled} enableZoom={false} />
						<ambientLight intensity={1} />
						<directionalLight position={[3, 2, 1]} />
						<Sphere args={[1, 100, 200]} scale={2.5}>
							<MeshDistortMaterial
								color='#3d1c56'
								attach='material'
								distort={0.5}
								speed={2}
							/>
						</Sphere>
					</Canvas>
					<Img src='./img/astronaut.png' alt='astronaut' />
				</Animation>
			</Container>
		</Section>
	);
}

export default Home;