import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';
import Air from '../3D/Air';

const Desc = styled.div`
	width: 200px;
	height: fit-content;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	position: absolute;
	top: 50px;
	right: 50px;

	@media only screen and (max-width: 768px) {
		top: 280px;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
`;

const Development = () => {
	return (
		<>
			<Canvas>
				<Stage environment='city' intensity={0.6}>
					<Air />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate />
			</Canvas>
			<Desc>I design products with a pixel-perfect focus on both your Figma design and usability.
			</Desc>
		</>
	)
}

export default Development;