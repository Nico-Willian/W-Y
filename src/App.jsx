import React from 'react';
import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';
import { intervalToDuration } from 'date-fns';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from '../src/assets/F1.png';
import photo2 from '../src/assets/F2.png';
import photo3 from '../src/assets/F3.png';
import photo4 from '../src/assets/F4.png';

// Animação para os corações
const move = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-100vh) translateX(100vw);
  }
`;

const HeartsBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  &:before, &:after {
    content: '❤️';
    font-size: 100px;
    color: rgba(255, 0, 0, 0.1);
    position: absolute;
    animation: ${move} 10s linear infinite;
  }

  &:before {
    top: 100%;
    left: 0;
  }

  &:after {
    top: 100%;
    left: 50%;
  }

  &::before {
    content: '❤️';
    font-size: 100px;
    color: rgba(255, 0, 0, 0.1);
    position: absolute;
    top: 100%;
    left: 25%;
    animation: ${move} 12s linear infinite;
  }

  &::after {
    content: '❤️';
    font-size: 100px;
    color: rgba(255, 0, 0, 0.1);
    position: absolute;
    top: 100%;
    left: 75%;
    animation: ${move} 8s linear infinite;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const PhotoCarousel = styled(Slider)`
  margin-bottom: 30px;
  
  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    width: 400px; 
    height: 500px; 
    object-fit: cover;
    border-radius: 15px;
  }
`;

const DateText = styled.div`
  font-size: 24px;
  margin: 20px 0;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledHr = styled.hr`
  width: 20%;
  color: rgba(51, 69, 97, 0.151);
  background-color: rgba(150, 183, 236, 0.342);
  height: 2px;
  border: none;
`;

const LoveMessage = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ffffff;
  margin: 20px 0;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

function App() {
  // Define a data de início do namoro
  const startDate = new Date('2024-12-25'); 
  const now = new Date();

  const duration = intervalToDuration({ start: startDate, end: now });
  let { years, months, days } = duration;
  if (days === undefined) {
    days = 0;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
  ];

  return (
    <>
      <HeartsBackground />
      <Container>
        <PhotoCarousel {...settings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={`Foto ${index + 1}`} />
            </div>
          ))}
        </PhotoCarousel>

        <DateText>
          Juntos <br></br> {years} anos, {months} meses e {days} dias <br></br> ❤️
        </DateText>
        <StyledHr />
        <LoveMessage>
          Meu amor, fiz essa simples dedicadora a você para comemorar nossa união por mais um mês e desde o inicio até cada momento ao seu lado é especial.
          Você ilumina meus dias como ninguém conseguia e faz meu coração sorrir.
          Te amo mais a cada dia que passa! ❤️
        </LoveMessage>
      </Container>
    </>
  );
}

export default App;