import { Container } from "./styles";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          &copy; {new Date().getFullYear()} Diana Huaripayta G. . Todos los
          derechos reservados.
        </p>
      </div>
      <div className="social-media">
        <a
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
      </div>
    </Container>
  );
}
