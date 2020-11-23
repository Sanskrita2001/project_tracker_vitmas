import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import logo from './Components/Assets/vitmas gold .png';
import { Container } from 'react-bootstrap';
import Projects from './Components/Projects';
import Particles from 'react-particles-js';
import Footer from './Components/Footer';
class App extends Component {
	render() {
		return (
			<>
				<style type='text/css'>
					{`
            .navbar{
              color:white !important;
            }
          `}
				</style>
				<Navbar fixed='top' />
				<Navbar bg='dark' variant='dark'>
					<Navbar.Brand href='#home'>
						<img
							alt=''
							src={logo}
							width='30'
							height='30'
							className='d-inline-block align-top'
						/>
					</Navbar.Brand>
					<Navbar.Brand href='#home'>VITMAS</Navbar.Brand>
					<Nav className='mr-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#projects'>Projects</Nav.Link>
						<Nav.Link href='#contact_us'>Contact_Us</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type='text' placeholder='Search' className='mr-sm-2' />
						<Button variant='outline-info'>Search</Button>
					</Form>
				</Navbar>
				<Container fluid className='body'>
					<h1 className='text-white text-center'>Projects</h1>
					<Particles
						params={{
							particles: {
								number: {
									value: 50,
								},
								size: {
									value: 3,
								},
							},
							interactivity: {
								events: {
									onhover: {
										enable: true,
										mode: 'repulse',
									},
								},
							},
						}}
					/>
				</Container>
				<Projects />
				<Footer />
			</>
		);
	}
}

export default App;
