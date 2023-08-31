import React, { useRef } from 'react';
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
	const textRef = useRef();
	useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 5));
	return (
		<mesh>
			<boxGeometry args={[1.5, 1.5, 1.5]} /> 
			<meshStandardMaterial>
				<RenderTexture attach='map'>
					<PerspectiveCamera
						makeDefault
						position={[0, 0, 5]}
					/>
					<color attach='background' args={['#ad06df']} />
					<Text ref={textRef} fontSize={3} color='#c1a9b2'>
						front-end
					</Text>
				</RenderTexture>
			</meshStandardMaterial>
		</mesh>
	)
}

export default Cube;
