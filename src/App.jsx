import Candidate from './components/Candidate';
import About from './components/About';
import Industry from './components/Industry';
import Contacts from './components/Contacts';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow-y: auto;
	scrollbar-width: none;
	color: white;
	background: url("./img/bg.jpg");
	background-size: cover;
	&::-webkit-scrollbar{
		display: none;
	}
`

function App() {

	return (
		<Container>
			<Candidate/>
			<About/>
			<Industry/>
			<Contacts />
		</Container>
	)
}


export default App
