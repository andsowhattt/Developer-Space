import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Map from '../sections/Map';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	@media only screen and (max-width: 768px) {
		scroll-snap-align: none;
	}
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 50px;

	
`

const Feedback = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media only screen and (max-width: 1060px) {
		justify-content: center;
	}
	@media only screen and (max-width: 768px) {
		padding-top: 150px;
	}
`

const Title = styled.h2`
	font-weight: 200;
`

const Form = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 25px;

	@media only screen and (max-width: 768px) {
		width: 300px;
	}
`

const Input = styled.input`
	padding: 20px;
	background-color: #e8e6e6;
	border: none;
	border-radius: 5px;
`

const TextArea = styled.textarea`
	padding: 20px;
	border: none;
	border-radius: 5px;
	background-color: #e8e6e6;
`

const Button = styled.button`
	background-color: transparent;
	color: white;
	border: 1px solid white;
	font-size: 18px;
	font-weight: 500;
	padding: 20px;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

	&:hover {
		background-color: #3d1c56;
		transform: scale(1.05);
	}
`;

const Location = styled.div`
	flex: 1;

	@media only screen and (max-width: 1060px) {
		display: none;
	}
`

const Contacts = () => {
	const ref = useRef();
	const [success, setSuccess] = useState(null);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();

		emailjs.sendForm('service_rqqbjgj', 'template_my7ive6', ref.current, 'wx7_C5brdReRsDFz6')
			.then((result) => {
				console.log(result.text);
				setSuccess(true);
				setFormData({
					name: '',
					email: '',
					message: ''
				});
			}, (error) => {
				console.log(error.text);
				setSuccess(false);
			});
	};

	return (
		<Section id="contacts">
			<Container>
				<Feedback>
					<Form ref={ref} onSubmit={handleSubmit}>
						<Title>
							Contact Me
						</Title>
						<Input
							placeholder='Name'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
						/>
						<Input
							placeholder='Email'
							name='email'
							value={formData.email}
							onChange={handleInputChange}
						/>
						<TextArea
							placeholder='Write your message'
							name='message'
							rows={10}
							value={formData.message}
							onChange={handleInputChange}
						/>
						<Button type='submit'>Send</Button>
						{success &&
							"Your message has been sent. I'll get back to you soon."}
					</Form>
				</Feedback>
				<Location>
					<Map />
				</Location>
			</Container>
		</Section>
	);
};

export default Contacts;