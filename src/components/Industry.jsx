import React, { useState } from 'react';
import styled from 'styled-components';
import Development from './Development';
import ProductDesign from './ProductDesign';
import WebDesign from './WebDesign';


const data = [
	'Development',
	'Web Design',
	'Illustration',
	'Design',
	'Social Media',
];

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`

const Container = styled.div`
	height: 1400px;
	display: flex;
	justify-content: space-between;
`

const Directions = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const ListItem = styled.li`
	font-size: 90px;
	font-weight: bold;
	cursor: pointer;
	position: relative;
	color: transparent;
	-webkit-text-stroke: 1px white;
	&::after{
		content: '${(props)=>props.text}';
		position: absolute;
		top: 0;
		left: 0;
		color: pink;
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

const Industry = () => {
	const [work,setWork] = useState('Development')
	return (
		<Section>
			<Container>
				<Directions>
					<List>
						{data.map((item) => (
							<ListItem key={item} text={item} onClick={()=>setWork(item)}>
								{item}
							</ListItem>
						))}
					</List>
				</Directions>
				<Animation>
					{work === 'Development' ? (<Development />
					) : work === 'Web Design' ? (<WebDesign />
					) : (<ProductDesign />
					)}
				</Animation>
			</Container>
		</Section>
	)
}

export default Industry;