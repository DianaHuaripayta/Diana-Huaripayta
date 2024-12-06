import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import DianaAHG from "../../assets/DianaAHG.jpeg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
          <h1>Diana Huaripayta Gonzales</h1>
          <h3>Full Stack Developer</h3>
          <p className="small-resume">4 años de experiencia</p>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contacto</NavHashLink>
          </BrowserRouter>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/diana-hg/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/DianaHuaripayta"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B51903002210&text=Hola+Diana"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
          <img src={DianaAHG} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}