import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Village from './Village.png';
import map2 from './map_2.png';
import park from './park.png';
import school from './school.png';
import library from './library.png';
const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
    <div className="story">
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='name2'>
                        <img src={Village} alt='village'/>
                        <h1>동네이야기</h1>
                </Navbar.Brand>
            </Container>
        </Navbar> 
        <br />
        <Slider {...settings}>
            <div>
                <h3>역곡 2동</h3>
                <img src={map2} alt='map' />
                <h8>위치</h8>
                <br />
                <h8>나이대</h8>
                <br />
                <h8>랜드마크</h8>
                <br />
                <h8>인구수</h8>
                <br />
                <h8>정보출처</h8>
            </div>
            <div>
                <h3><img src={park} alt='park' /></h3>
            </div>
            <div>
                <h3><img src={school} alt='school' /></h3>
            </div>
            <div>
                <h3><img src={library} alt='library' /></h3>
            </div>
            <div>
                <h3><img src={park} alt='park' /></h3>
            </div>
        </Slider>
    </div>
    );
  }

export default SimpleSlider;
