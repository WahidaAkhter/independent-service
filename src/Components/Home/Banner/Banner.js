import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 " 
            src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&t=st=1650133101~exp=1650133701~hmac=53a25e181509c366205a7b239b79dd96b6afb02ae34e3369a48f726a179f7aa8&w=1380"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="https://img.freepik.com/free-photo/travel-concept-with-worldwide-landmarks_23-2149153263.jpg?3&w=900"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=1380"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;