import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Web from './Web';

const WebDesign = () => {
	return (
		<Canvas>
			<Stage environment='city' intensity={0.6}>
				<Web />
			</Stage>
			<OrbitControls enableZoom={false} />
		</Canvas>
	)
}

export default WebDesign;