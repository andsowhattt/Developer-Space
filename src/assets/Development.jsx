import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import React_logo from '../3D/React_logo';
import styled from 'styled-components';

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
		padding: 10px;
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
					<React_logo />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate />
			</Canvas>
			<Desc>I have the necessary stacks of technologies, libraries and frameworks for the development of high-quality and productive projects.
			</Desc>
		</>
	)
}

export default Development;