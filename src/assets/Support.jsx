import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import Ok from '../3D/Ok';
import React from 'react'
import styled from 'styled-components';

const Desc = styled.div`
	width: 200px;
	height: 70px;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	position: absolute;
	bottom: 550px;
	right: 100px;

	@media only screen and (max-width: 768px) {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
`;

const Support = () => {
	return (
		<>
			<Canvas>
				<Stage environment='city' intensity={0.6}>
					<Ok />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate/>
			</Canvas>
			<Desc>I can provide ongoing support in the website's development over the years by integrating new and modern features.
			</Desc>
		</>
	)
}

export default Support;