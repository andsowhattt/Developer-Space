import React from 'react';
import styled from 'styled-components';
import { FaMinus } from 'react-icons/fa';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`

const Container = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: space-between;
`

const Animation = styled.div`
	flex: 1;
	
`
const Title = styled.h1`
	font-size: 74px;
`
const Company = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

const Line = styled(FaMinus)`
	height: 15px;
	
`

const Subtitle = styled.h2`
	color: #da4ea2;
`
const Desc = styled.p`
	font-size: 24px;
	color: lightgray;
`
const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	font-weight: 500;
	padding: 10px;
	width: 120px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

const Info = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`

const About = () => {
	return (
		<Section>
			<Container>
				<Animation>
					{/* 3d model */}
				</Animation>
				<Info>
					<Title>Think outside the square space</Title>
					<Company>
						<Line />
						<Subtitle>Who we are</Subtitle>
					</Company>
					<Desc>A creative group of developers and designers with a passion for the arts.</Desc>
					<Button>See our works</Button>
				</Info>
			</Container>
		</Section>
	)
}

export default About;