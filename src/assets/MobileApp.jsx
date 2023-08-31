import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import App from '../3D/App';
import React from 'react'
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
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
`;

const MobileApp = () => {
	return (
		<>
			<Canvas>
				<Stage environment='city' intensity={0.6}>
					<App />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate />
			</Canvas>
			<Desc>Understanding the basics of UX and UI helps create a user-friendly and appealing interface.
			</Desc>
		</>
	)
}

export default MobileApp;