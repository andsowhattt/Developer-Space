import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';

const Section = styled.div`
	display: flex;
	justify-content: center;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Container = styled.div`
	width: 1400px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0px;
	
	@media only screen and (max-width: 1465px) {
		width: 1000px;
		padding: 10px;
	}

	@media only screen and (max-width: 1060px) {
		width: 768px;
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	gap: 60px;
	font-size: 18px;
	font-weight: 500;

	@media only screen and (max-width: 1060px) {
		gap: 10px;
	}
`;

const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	
`;

const SearchIcon = styled(FaPhone)`
	width: 20px;
	height: 20px;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
	}
`;

const Logo = styled.img`
	height: 130px;

	@media only screen and (max-width: 768px) {
		height: 100px;
	}
`;

const List = styled.ul`
	display: flex;
	gap: 30px;
	list-style: none;

	@media only screen and (max-width: 1060px) {
		display: none;
	}
`;

const ListItem = styled.li`
	cursor: pointer;
	
	&:hover {
		transform: scale(1.05);
	}
`;

const Button = styled.button`
	background-color: transparent;
	color: white;
	border: 1px solid white;
	font-size: 18px;
	font-weight: 500;
	padding: 10px;
	width: 180px;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

	&:hover {
		background-color: #3d1c56;
		transform: scale(1.05);
	}

	@media only screen and (max-width: 768px) {
		width: 120px;
	}
`;

const Navbar = () => {

	const [phoneNumber, setPhoneNumber] = useState('+380501080118');

	const handlePhoneIconClick = () => {
		window.location.href = `tel:${phoneNumber}`;
	};


	return (
		<Section>
			<Container>
				<Menu>
					<Logo src='./img/logo.png' alt='Logo' />
					<List>
						<ListItem>
							<a href="#home">Home</a>
						</ListItem>
						<ListItem>
							<a href="#creativity">Сreativity</a>
						</ListItem>
						<ListItem>
							<a href="#skills">Skills</a>
						</ListItem>
						<ListItem>
							<a href="#contacts">Contacts</a>
						</ListItem>
					</List>
				</Menu>
				<Icons>
					<SearchIcon onClick={handlePhoneIconClick} />
					<Button onClick={() => window.location.href = '#contacts'}>Hire Now</Button>
				</Icons>
			</Container>
		</Section>
	)
}

export default Navbar