import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import React_logo from './React_logo';

const Development = () => {
	return (
		<Canvas>
			<Stage environment='city' intensity={0.6}>
				<React_logo />
			</Stage>
			<OrbitControls enableZoom={false} />
		</Canvas>
	)
}

export default Development;