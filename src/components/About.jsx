import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube';
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
const Company = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

const Line = styled(FaMinus)`
	height: 15px;
	margin-left: 50px;
`

const Subtitle = styled.h2`
	color: #da4ea2;
	font-style: italic;
`
const Desc = styled.p`
	font-size: 24px;
	color: lightgray;
`
const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	font-size: 18px;
	font-weight: 500;
	padding: 10px;
	width: 180px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

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

const About = () => {
	return (
		<Section>
			<Container>
				<Animation>
					<Canvas camera={{fov:25, position:[5,5,5]}}>
						<OrbitControls enableZoom={false} autoRotate/>
						<ambientLight intensity={1} />
						<directionalLight position={[3, 2, 1]} />
						<Cube />
					</Canvas>
				</Animation>
				<Info>
					<Title>Expand your thinking beyond the confines of the square area.</Title>
					<Company>
						<Line />
						<Subtitle>Any idea deserves to be implemented.</Subtitle>
					</Company>
					<Desc>A great developer is someone who is guided by creativity.</Desc>
					<Button>Contact Me</Button>
				</Info>
			</Container>
		</Section>
	)
}

export default About;