import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from '../sections/Cube';
import { FaMinus } from 'react-icons/fa';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`

const Container = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: space-between;
`

const Animation = styled.div`
	flex: 1;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`
const Title = styled.h1`
	font-size: 74px;

	@media only screen and (max-width: 768px) {
		font-size: 60px;
	}
`
const Motto= styled.div`
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

const Info = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

	@media only screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
	}
`

const Creativity = () => {
	return (
		<Section id='creativity'>
			<Container>
				<Animation>
					<Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
						<OrbitControls enableZoom={false} autoRotate />
						<ambientLight intensity={1} />
						<directionalLight position={[3, 2, 1]} />
						<Cube />
					</Canvas>
				</Animation>
				<Info>
					<Title>Expand your thinking beyond the confines of the square area.</Title>
					<Motto>
						<Line />
						<Subtitle>Any idea deserves to be implemented.</Subtitle>
					</Motto>
					<Desc>A great developer is someone who is guided by creativity.</Desc>
					<Button onClick={() => window.location.href = '#contacts'}>Contact Me</Button>
				</Info>
			</Container>
		</Section>
	)
}

export default Creativity;