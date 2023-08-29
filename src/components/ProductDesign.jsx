import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Sneaker from './Sneaker';

const ProductDesign = () => {
	return (
		<Canvas>
			<Stage environment='city' intensity={0.6}>
				<Sneaker />
			</Stage>
			<OrbitControls enableZoom={false} />
		</Canvas>
	)
}

export default ProductDesign;