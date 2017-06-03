import React, {Component} from 'react';
import {Carousel, Grid, Row, Col} from 'react-bootstrap';

class Home extends Component {
    render(){
        return(
            <Grid>
            <Row>
            <Col md={4}>
             <div className="card1"> <p> Description </p> 
             <p>blah blah</p>
             </div>
            <br/>
             <div className="card1"> <p> Description </p> 
             <p>blah blah</p>
             </div>
            <br />
             <div className="card1"> <p> Description </p> 
             <p>blah blah</p>
             </div>
           <br />
             <div className="card1"> <p> Description </p> 
             <p>blah blah</p>
             </div>
            </Col>
            <Col md={4}>
            <Carousel>
                <Carousel.Item><img width={900} height={200} alt="900x200" 
                src="https://marketplace.canva.com/MACE_bCG9mM/1/0/thumbnail_large/canva-yellow-creative-director-photo-resume-MACE_bCG9mM.jpg"/>
                <Carousel.Caption>
                <h3>Template 1</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
    
                <Carousel.Item><img width={900} height={200} alt="900x200" 
                src="https://marketplace.canva.com/MAB5V6_Wn9M/1/0/thumbnail_large/canva-green-elementary-educator-r%C3%A9sum%C3%A9-MAB5V6_Wn9M.jpg"/>
                <Carousel.Caption>
                <h3>Template 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
    
                <Carousel.Item><img width={900} height={200} alt="900x200" 
                src="https://marketplace.canva.com/MAB5aJa-4vM/1/0/thumbnail_large/canva-professional-store-manager-resume-MAB5aJa-4vM.jpg"/>
                <Carousel.Caption>
                <h3>Template 3</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Col>
            <Col md={4}>
             <div className="card1"> <p> Description </p> 
             <p>blah blah</p>
             </div>
            <br/>
             <div className="card1"> <p> Description </p> 
             <p>blah blah</p>
             </div>
            <br />
             <div className="card1"> <p> Description </p> 
             <p>blah blah</p>
             </div>
            <br />
             <div className="card1"> <p> Description </p> 
             <p>blah blah</p>
             </div>
            </Col>
            </Row>
            </Grid>
        );
    }
}

export default Home;