// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import Banner_1 from '../../assets/1.png';
import Banner_2 from '../../assets/2.png';
import Banner_3 from '../../assets/3.png';
import Banner_4 from '../../assets/4.png';

const Carousel = () => {
  const settings = {
    dots: false, // Desativa os pontos de navegação
    infinite: true, // loop infinito.
    speed: 400, // Velocidade
    slidesToShow: 1, // quantos slides serão exibidos ao mesmo tempo
    slidesToScroll: 1, //  quantos slides serão rolados de cada vez quando o usuário navega.
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 4000, // Define a velocidade do autoplay (3 segundos)
    arrows: false, // Desativa as setas de navegação
  };

  return (
    <div class="carousel-container">
      <Slider {...settings}> {/* <Slider>: Este é o componente que renderiza o carrossel.  O operador de propagação {...settings} é usado para passar as configurações do carrossel para o componente Slider.*/}
        <div class="Banner">
          <img src={Banner_1} alt="Banner 1" />
        </div>
        <div>
          <img src={Banner_2} alt="Banner 2" />
        </div>
        <div>
          <img src={Banner_3} alt="Banner 3" />
        </div>
        <div>
          <img src={Banner_4} alt="Banner 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
