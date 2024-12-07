import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import Project from "../Project/Project";
export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 200, // Más partículas para simular un cielo estrellado
            },
            color: {
              value: ["#ffffff", "#f8f9fa", "#adb5bd"], // Colores para variación
            },
            links: {
              enable: false, // Desactiva líneas de conexión
            },
            move: {
              enable: true,
              speed: 0.5, // Movimiento lento como estrellas lejanas
              direction: "none",
              random: true,
              straight: false,
              outMode: "out",
            },
            shape: {
              type: "star", // Cambia a estrellas
            },
            size: {
              value: { min: 1, max: 3 }, // Tamaños pequeños para simular estrellas
              random: true,
            },
            opacity: {
              value: { min: 0.3, max: 1 }, // Variación en la intensidad de las estrellas
              random: true,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.3,
              },
            },
          },
          background: {
            color: "#ffff", // Fondo negro para el cielo nocturno
          },
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}