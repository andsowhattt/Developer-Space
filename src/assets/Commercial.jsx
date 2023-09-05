import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Sneaker from '../3D/Sneaker';
import React from 'react';
import styled from 'styled-components';


const Desc = styled.div`
	width: 200px;
	height: fit-content;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	position: absolute;
	top: 600px;
	right: 100px;

	@media only screen and (max-width: 768px) {
		padding: 10px;
		top: 280px;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
`;

const Commercial = () => {
	return (
		<>
			<Canvas>
				<Stage environment='city' intensity={0.6}>
					<Sneaker />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate />
			</Canvas>
			<Desc>The front end affects how users interact with and perceive the product, influencing their decision to make a purchase.
			</Desc>
		</>
	)
}

export default Commercial;