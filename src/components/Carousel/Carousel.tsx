import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

interface Project {
  title: string;
  images: string[];
  description: string;
  techStack: string[];
}

interface ModalProps {
  project: Project;
}

const Carousel: React.FC<ModalProps> = ({ project }) => {
  // Configuración de react-slick
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768, // Ajuste para tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Ajuste para móviles
        settings: {
          slidesToShow: 1,
          arrows: false, // Ocultar flechas en pantallas pequeñas
        },
      },
    ],
  };

  // Contenedor del carrusel
  const CarouselContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 90%;
    }

    @media (max-width: 480px) {
      max-width: 100%;
    }
  `;

  // Contenedor de imágenes
  const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 20%;
    img {
      width: 100%;
      max-width: 100%;
      height: 20em;
      border-radius: 10px; /* Opcional para un diseño más limpio */
      object-fit: contain;
    }
  `;

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {project.images.map((image, index) => (
          <ContainerImg key={index}>
            <img src={image} alt={`${project.title} image ${index + 1}`} />
          </ContainerImg>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
