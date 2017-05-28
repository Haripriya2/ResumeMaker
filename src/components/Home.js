import React, {Component} from 'react';
import {Carousel, Grid, Row, Col} from 'react-bootstrap';

class Home extends Component {
    render(){
        return(
            <Grid>
            <Row>
            <Col md={8}>
            <Carousel>
                <Carousel.Item><img width={900} height={200} alt="900x200" 
                src="https://marketplace.canva.com/MACE_bCG9mM/1/0/thumbnail_large/canva-yellow-creative-director-photo-resume-MACE_bCG9mM.jpg"/>
                <Carousel.Caption>
                <h3>Template 1</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
    
                <Carousel.Item><img width={900} height={200} alt="900x200" 
                src="https://s-media-cache-ak0.pinimg.com/originals/ea/4b/47/ea4b47195a3a3b12ab20af96075dd362.jpg"/>
                <Carousel.Caption>
                <h3>Template 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
    
                <Carousel.Item><img width={900} height={200} alt="900x200" 
                src="https://static.wixstatic.com/media/6d2987_a0efd8d57ae642ee9d43d1ca2d108e7d.png_srz_202_260_85_22_0.50_1.20_0.00_png_srz"/>
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
            </Col>
            </Row>
            </Grid>
        );
    }
}

export default Home;