import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Section = styled.div`
	display: flex;
	justify-content: center;
`

const Container = styled.div`
	width: 1400px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0px;
`

const Menu = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
`

const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`

const SearchIcon = styled(FaSearch)`
	width: 20px;
	height: 20px;
	cursor: pointer;
`

const Logo = styled.img`
	height: 130px;
`

const List = styled.ul`
	display: flex;
	gap: 20px;
	list-style: none;
`

const ListItem = styled.li`
	cursor: pointer;
`

const Button = styled.button`
	width: 100px;
	padding: 10px;
	background-color: #da3ea2;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

const Navbar = () => {
	return (
		<Section>
			<Container>
				<Menu>
					<Logo src='./img/logo.png' alt='Logo' />
					<List>
						<ListItem>Home</ListItem>
						<ListItem>Industry</ListItem>
						<ListItem>About</ListItem>
						<ListItem>Contacts</ListItem>
					</List>
				</Menu>
				<Icons>
					<SearchIcon />
					<Button>Hire Now</Button>
				</Icons>
			</Container>
		</Section>
	)
}

export default Navbar