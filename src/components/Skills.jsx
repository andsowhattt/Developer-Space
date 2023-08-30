import React, { useState } from 'react';
import styled from 'styled-components';
import Development from './Development';
import Support from './Support';
import MobileApp from './MobileApp';
import WebDesign from './WebDesign';
import Commercial from './Commercial';


const data = [
	'Development',
	'Mobile App Interface',
	'Web Design',
	'Commercial Projects',
	'Projects Support',
];

const Section = styled.div`
	height: 150vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
	position: relative;
	color: black;
	font-size: 14px;
	font-weight: 300;
`

const Container = styled.div`
	height: 1400px;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`

const Directions = styled.div`
	flex: 1;
	display: flex;
	align-items: center;

	@media only screen and (max-width: 768px) {
		padding: 20px;
		justify-content: center;
	}
`

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const ListItem = styled.li`
	font-size: 80px;
	font-weight: bold;
	cursor: pointer;
	position: relative;
	color: transparent;
	-webkit-text-stroke: 1px white;

	@media only screen and (max-width: 768px) {
		font-size: 24px;
		color: white;
		-webkit-text-stroke: 0px;
	}

	&::after{
		content: '${(props) => props.text}';
		position: absolute;
		top: 0;
		left: 0;
		color: #3d1c56;
		width: 0px;
		overflow: hidden;
		white-space: nowrap;
	}

	&:hover {
		&::after{
			animation: moveText 0.5s linear both;

			@keyframes moveText {
				to{
					width: 100%;
				}
			}
		}
	}
`;

const Animation = styled.div`
	flex: 1;
`

const Skills = () => {
	const [work, setWork] = useState('Development')
	return (
		<Section id='skills'>
			<Container>
				<Directions>
					<List>
						{data.map((item) => (
							<ListItem key={item} text={item} onClick={() => setWork(item)}>
								{item}
							</ListItem>
						))}
					</List>
				</Directions>
				<Animation>
					{(() => {
						switch (work) {
							case 'Development':
								return <Development />;
							case 'Mobile App Interface':
								return <MobileApp />;
							case 'Web Design':
								return <WebDesign />;
							case 'Commercial Projects':
								return <Commercial />;
							case 'Projects Support':
								return <Support />;
							default:
								return null;
						}
					})()}
				</Animation>
			</Container>
		</Section>
	)
}

export default Skills;