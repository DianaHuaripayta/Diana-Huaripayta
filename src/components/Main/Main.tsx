import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import Angular from "../../assets/angular_icon_130993.svg"
import Flutter from "../../assets/file_type_flutter_icon_130599.svg"
import Mongo from "../../assets/file_type_mongo_icon_130383.svg"
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
              onHover: {
                enable: false,
                mode: "grab", // Cambiado a "grab" para destacar los links al pasar el mouse
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 1,
                },
              },
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
              value: 50, // Aumenta el número de partículas
            },
            color: {
              value: "#ffffff",
            },
            links: {
              enable: true, // Habilita los links
              distance: 150, // Distancia entre partículas conectadas
              color: "#1E3A8A", // Color de las líneas
              opacity: 0.5, // Opacidad de las líneas
              width: 1, // Grosor de las líneas
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outMode: "out",
              attract: {
                enable: false,
              },
            },
            shape: {
              type: "circle", // Puedes alternar entre "circle", "image", etc.
            },
            size: {
              value: 5,
              random: true,
            },
            opacity: {
              value: 0.5,
              random: true,
            },
          },
          background: {
            color: "#ffff", // Color de fondo
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