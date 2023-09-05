import React, { useState } from 'react';
import styled from 'styled-components';
import Development from '../assets/Development';
import Support from '../assets/Support';
import MobileApp from '../assets/MobileApp';
import WebDesign from '../assets/WebDesign';
import Commercial from '../assets/Commercial';


const data = [
	'Development',
	'Interface',
	'Web Design',
	'Commerce',
	'Support',
];

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: start;
	display: flex;
	position: relative;
	color: black;
	font-size: 14px;
	justify-content: center;
	font-weight: 300;

	@media only screen and (max-width: 1465px) {
		padding-bottom: 250px;
	}

	@media only screen and (max-width: 768px) {
		padding-bottom: 10px;
	}
`

const Container = styled.div`
	height: 1000px;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 1465px) {
		width: 1000px;
		padding: 10px;
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`

const Directions = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	margin-left: auto;

	@media only screen and (max-width: 1465px) {
		flex: 1;
	}

	@media only screen and (max-width: 768px) {
		margin: 0px;
		padding: 20px;
		justify-content: center;
		align-items: start;
	}
`

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const ListItem = styled.li`
	font-size: 65px;
	font-weight: bold;
	cursor: pointer;
	position: relative;
	color: transparent;
	-webkit-text-stroke: 1px white;

	@media only screen and (max-width: 768px) {
		font-size: 36px;
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
	flex: 2;
	margin-right: auto;
	width: 1100px;

	@media only screen and (max-width: 1465px) {
		flex: 1;
	}

	@media only screen and (max-width: 1060px) {
		width: 400px;
	}

	@media only screen and (max-width: 768px) {
		margin: auto;
	}
	
	@media only screen and (max-width: 375px) {
		justify-content: center;
		width: 300px;
	}
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
							case 'Interface':
								return <MobileApp />;
							case 'Web Design':
								return <WebDesign />;
							case 'Commerce':
								return <Commercial />;
							case 'Support':
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