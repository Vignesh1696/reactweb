import React , { Component } from 'react'
import { Badge } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel'
import logo from '../img/mar.jpg';
import logo2 from '../img/328886.jpg';
import logo3 from '../img/ho.jpg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

const css = {
  'font-style': 'italic'
}

const div  = {
 'box-shadow': '0 8px 16px 0 rgba(204,0,0,0.2)'
}


class Body extends Component{
render(){

	return(
<div>
		<Carousel>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={logo}
			      alt="First slide"
			    />
			    <Carousel.Caption>
			      <h3>Marvel</h3>
			      <p>marvel is a world largest company.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={logo2}
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>DC</h3>
			      <p>Dc is a oppenent to  marvel.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={logo3}
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>HollyWood</h3>
			      <p>holloywood make powerfull.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			<br />
			<Container>
			<h2><Badge color="danger">MARVEL</Badge></h2>
			   <Row>
			    <Col sm={4} md={4} lg={5}>
			      <img
			      className="d-block w-100"
			      src={logo}
			      alt="First slide"
			      style={ div}
			    />
			    </Col>
			    <br />
			    <Col sm={4} md={4} lg={7}>
			     <Card border="danger" style={ div}>
					    <Card.Body>
					      <Card.Text>
					         Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., 
						     formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and related media. 
						    In 2009, The Walt Disney Company acquired Marvel Entertainment, 
						    Marvel Worldwide's parent company.
						    <br />
						     Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., 
						     formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and related media. 
						    In 2009, The Walt Disney Company acquired Marvel Entertainment, 
						    Marvel Worldwide's parent company.
					      </Card.Text>
					    </Card.Body>
					  </Card>   
			    </Col>
			  </Row>
			  <br />
			  <h2><Badge color="dark">DC</Badge></h2>
			  <Row>
			   <Col sm={4} md={4} lg={7}>
			     <Card border="danger" style={ div}>
					    <Card.Body>
					      <Card.Text>
					         Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., 
						     formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and related media. 
						    In 2009, The Walt Disney Company acquired Marvel Entertainment, 
						    Marvel Worldwide's parent company.
						    <br />
						     Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., 
						     formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and related media. 
						    In 2009, The Walt Disney Company acquired Marvel Entertainment, 
						    Marvel Worldwide's parent company.
					      </Card.Text>
					    </Card.Body>
					  </Card>   
			    </Col>
			    <br />
			   <Col sm={4} md={4} lg={5}>
			      <img
			      className="d-block w-100"
			      src={logo2}
			      alt="First slide"
			      style={ div}
			    />
			    </Col>
			  </Row>
			 <br />
			<h2><Badge color="warning">HOLLYWOOD</Badge></h2>
			   <Row>
			    <Col sm={4} md={4} lg={5}>
			      <img
			      className="d-block w-100"
			      src={logo3}
			      alt="First slide"
			      style={ div}
			    />
			    </Col>
			    <br />
			    <Col sm={4} md={4} lg={7}>
			     <Card border="danger" style={ div}>
					    <Card.Body>
					      <Card.Text>
					         Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., 
						     formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and related media. 
						    In 2009, The Walt Disney Company acquired Marvel Entertainment, 
						    Marvel Worldwide's parent company.
						    <br />
						     Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., 
						     formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and related media. 
						    In 2009, The Walt Disney Company acquired Marvel Entertainment, 
						    Marvel Worldwide's parent company.
					      </Card.Text>
					    </Card.Body>
					  </Card>   
			    </Col>
			  </Row>
			</Container>
			</div>
		)
}

}


export default Body;
