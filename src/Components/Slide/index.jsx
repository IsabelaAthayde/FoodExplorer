import { Component } from "react";

import Slider from "react-slick";

import { Container } from "./styles.js";

import { Card } from '../Card';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={className} style={{...style}} onClick={onClick}>
      <IoIosArrowForward/>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button  className={className} style={{...style}} onClick={onClick} >
      <IoIosArrowForward/>
    </button>
  );
}


class Carousel extends Component {
    render() {
      const settings = {
        dots: false,
        arrows: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 975,
            settings: {
            centerMode: true,
            slidesToShow: 2,
            infinite: true,
            dots: false,
            className: "center",
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            }
          },
          {
            breakpoint: 745,
            settings: {
              arrows: false,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 490,
            settings: {
              arrows: false,
              infinite: true,
              speed: 500,
              slidesToShow: 0.5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 490,
            settings: {
              arrows: false,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
            }
          }
        ]
      };
  
      return (
      <Container>
        <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />

        </Slider> 
        </Container>
      );
    }
  }

  export default Carousel;
  