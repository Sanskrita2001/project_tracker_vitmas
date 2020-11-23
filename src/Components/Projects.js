import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export class Projects extends Component {
	render() {
		const settings = {
			className: 'center',
			centerMode: true,
			infinite: true,
			centerPadding: '60px',
			slidesToShow: 3,
			speed: 500,
		};
		return (
			<div>
				<h1 className='text-center p-5'>Projects</h1>
				<Slider {...settings}>
					<div>
						<Card className='mb-5' style={{ width: '25rem' }}>
							<Card.Header as='h5'>Project Title-1</Card.Header>
							<Card.Body>
								<Card.Subtitle className='mb-2 text-muted'>
									Project Subtitle
								</Card.Subtitle>
								<Card.Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
									nisi libero, imperdiet ac orci a, placerat commodo lectus.
									Praesent nec arcu nisl. Pellentesque habitant morbi tristique
									senectus et netus et malesuada fames ac turpis egestas. Sed
									non nibh ut dolor lacinia congue. Praesent eget risus ut nisl
									posuere aliquet in ac tortor. Morbi ut tincidunt nulla. Donec
									ultricies ex turpis, eget porttitor odio pellentesque eu.
									Mauris bibendum ligula a vulputate sollicitudin. Pellentesque
									vehicula ligula eu consectetur dapibus.
								</Card.Text>
								<Button variant='secondary'>More Details</Button>
								<Card.Link className='ml-3 text-dark' href='#'>
									Github Link
								</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div>
						<Card className='mb-5' style={{ width: '25rem' }}>
							<Card.Header as='h5'>Project Title-2</Card.Header>
							<Card.Body>
								<Card.Subtitle className='mb-2 text-muted'>
									Project Subtitle
								</Card.Subtitle>
								<Card.Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
									nisi libero, imperdiet ac orci a, placerat commodo lectus.
									Praesent nec arcu nisl. Pellentesque habitant morbi tristique
									senectus et netus et malesuada fames ac turpis egestas. Sed
									non nibh ut dolor lacinia congue. Praesent eget risus ut nisl
									posuere aliquet in ac tortor. Morbi ut tincidunt nulla. Donec
									ultricies ex turpis, eget porttitor odio pellentesque eu.
									Mauris bibendum ligula a vulputate sollicitudin. Pellentesque
									vehicula ligula eu consectetur dapibus.
								</Card.Text>
								<Button variant='secondary'>More Details</Button>
								<Card.Link className='ml-3 text-dark' href='#'>
									Github Link
								</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div>
						<Card className='mb-5' style={{ width: '25rem' }}>
							<Card.Header as='h5'>Project Title-3</Card.Header>
							<Card.Body>
								<Card.Subtitle className='mb-2 text-muted'>
									Project Subtitle
								</Card.Subtitle>
								<Card.Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
									nisi libero, imperdiet ac orci a, placerat commodo lectus.
									Praesent nec arcu nisl. Pellentesque habitant morbi tristique
									senectus et netus et malesuada fames ac turpis egestas. Sed
									non nibh ut dolor lacinia congue. Praesent eget risus ut nisl
									posuere aliquet in ac tortor. Morbi ut tincidunt nulla. Donec
									ultricies ex turpis, eget porttitor odio pellentesque eu.
									Mauris bibendum ligula a vulputate sollicitudin. Pellentesque
									vehicula ligula eu consectetur dapibus.
								</Card.Text>
								<Button variant='secondary'>More Details</Button>
								<Card.Link className='ml-3 text-dark' href='#'>
									Github Link
								</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div>
						<Card className='mb-5' style={{ width: '25rem' }}>
							<Card.Header as='h5'>Project Title-4</Card.Header>
							<Card.Body>
								<Card.Subtitle className='mb-2 text-muted'>
									Project Subtitle
								</Card.Subtitle>
								<Card.Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
									nisi libero, imperdiet ac orci a, placerat commodo lectus.
									Praesent nec arcu nisl. Pellentesque habitant morbi tristique
									senectus et netus et malesuada fames ac turpis egestas. Sed
									non nibh ut dolor lacinia congue. Praesent eget risus ut nisl
									posuere aliquet in ac tortor. Morbi ut tincidunt nulla. Donec
									ultricies ex turpis, eget porttitor odio pellentesque eu.
									Mauris bibendum ligula a vulputate sollicitudin. Pellentesque
									vehicula ligula eu consectetur dapibus.
								</Card.Text>
								<Button variant='secondary'>More Details</Button>
								<Card.Link className='ml-3 text-dark' href='#'>
									Github Link
								</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div>
						<Card className='mb-5' style={{ width: '25rem' }}>
							<Card.Header as='h5'>Project Title-5</Card.Header>
							<Card.Body>
								<Card.Subtitle className='mb-2 text-muted'>
									Project Subtitle
								</Card.Subtitle>
								<Card.Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
									nisi libero, imperdiet ac orci a, placerat commodo lectus.
									Praesent nec arcu nisl. Pellentesque habitant morbi tristique
									senectus et netus et malesuada fames ac turpis egestas. Sed
									non nibh ut dolor lacinia congue. Praesent eget risus ut nisl
									posuere aliquet in ac tortor. Morbi ut tincidunt nulla. Donec
									ultricies ex turpis, eget porttitor odio pellentesque eu.
									Mauris bibendum ligula a vulputate sollicitudin. Pellentesque
									vehicula ligula eu consectetur dapibus.
								</Card.Text>
								<Button variant='secondary'>More Details</Button>
								<Card.Link className='ml-3 text-dark' href='#'>
									Github Link
								</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div>
						<Card className='mb-5' style={{ width: '25rem' }}>
							<Card.Header as='h5'>Project Title-6</Card.Header>
							<Card.Body>
								<Card.Subtitle className='mb-2 text-muted'>
									Project Subtitle
								</Card.Subtitle>
								<Card.Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
									nisi libero, imperdiet ac orci a, placerat commodo lectus.
									Praesent nec arcu nisl. Pellentesque habitant morbi tristique
									senectus et netus et malesuada fames ac turpis egestas. Sed
									non nibh ut dolor lacinia congue. Praesent eget risus ut nisl
									posuere aliquet in ac tortor. Morbi ut tincidunt nulla. Donec
									ultricies ex turpis, eget porttitor odio pellentesque eu.
									Mauris bibendum ligula a vulputate sollicitudin. Pellentesque
									vehicula ligula eu consectetur dapibus.
								</Card.Text>
								<Button variant='secondary'>More Details</Button>
								<Card.Link className='ml-3 text-dark' href='#'>
									Github Link
								</Card.Link>
							</Card.Body>
						</Card>
					</div>
				</Slider>
				<Button
					className='text-center'
					variant='success'
					href='#'
					style={{ width: '25rem', margin: '0 35%' }}
				>
					Add More Projects
				</Button>
			</div>
		);
	}
}

export default Projects;
