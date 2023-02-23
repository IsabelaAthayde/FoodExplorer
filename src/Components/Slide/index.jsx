import { Component } from "react";

import Slider from "react-slick";

import { Container } from "./styles.js";

import { Card } from '../Card';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

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

function getCategory(props) {
  console.log(category);
}

class Carousel extends Component {
    constructor(props) {
      super(props);

    }

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
              slidesToScroll: 1,
              initialSlide: 0,
            }
          },
          {
            breakpoint: 490,
            settings: {
              arrows: false,
              infinite: true,
              speed: 500,
              slidesToShow: 0.6,
              slidesToScroll: 1,
              initialSlide: 0,
            }
          },
          {
            breakpoint: 400,
            settings: {
              arrows: false,
              infinite: true,
              speed: 500,
              slidesToShow: 0.5,
              initialSlide: 0,
            }
          }
        ]
      };
       const { category } = this.props;
    
      return (
      <Container>
        <Slider {...settings}>     
          {category.map(meal => (
            <Card 
            key={String(meal.id)}
            isAdmin={this.props.isAdmin}
            data={meal}
            />
          ))}
        </Slider> 
        </Container>
      );
    }
  }

  export default Carousel;
  