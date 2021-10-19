import React from 'react';
import { Carousel } from 'react-bootstrap';
import ban11 from '../../../images/banner/ban11.jpg'
import ban22 from '../../../images/banner/ban22.jpg'
import ban33 from '../../../images/banner/ban33.jpg'




const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className=" d-block w-100"
                        src={ban11}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" d-block w-100 img-fluid"
                        src={ban22}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={ban33}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;