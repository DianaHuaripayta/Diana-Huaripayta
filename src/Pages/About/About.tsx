import wordpress from "../../assets/wordpress.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Angular from "../../assets/angular_icon_130993.svg";
import Flutter from "../../assets/file_type_flutter_icon_130599.svg";
import { Container } from "./styled";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Acerca de mí</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Soy <strong>Programadora</strong> 👩‍💻 apasionada por <strong>aprender</strong> y <strong>crear soluciones</strong>
            <strong> efectivas</strong> 💪.
            <br />
            Mi enfoque principal es resolver problemas a través de
            la <strong>tecnología</strong>, combinando <strong>creatividad</strong> y <strong>habilidades técnicas</strong> para
            desarrollar herramientas que generen un impacto <strong>positivo</strong> 🌟.
            <br />
            Disfruto del reto de aprender de forma <strong>autodidacta</strong> , explorar nuevas
            tecnologías y aplicar lo aprendido en proyectos <strong>prácticos</strong>.
            <br />
            Mi objetivo es siempre brindar soluciones <strong>innovadoras</strong> y adaptadas a las
            necesidades reales de las <strong>personas</strong> o <strong>empresas</strong>.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Aquí están mis principales Tecnologías:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hard-skills">
            <div className="hard-skills">
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <div className="skills-grid">
                  {[
                    { src: wordpress, alt: "Wordpress", label: "Wordpress" },
                    { src: Angular, alt: "Angular", label: "Angular" },
                    { src: Flutter, alt: "Flutter", label: "Flutter" },
                    { src: reactIcon, alt: "React", label: "React" },
                    { src: typescriptIcon, alt: "Typescript", label: "Typescript" },
                    { src: vueIcon, alt: "Vue", label: "Vue" },
                    { src: nodeIcon, alt: "Node.js", label: "Node.js" },
                    { src: htmlIcon, alt: "Html", label: "Html" },
                    { src: cssIcon, alt: "CSS", label: "CSS" },
                    { src: boostrapIcon, alt: "Bootstrap", label: "Bootstrap" },
                    { src: jsIcon, alt: "JavaScript", label: "JavaScript" },
                  ].map((skill, index) => (
                    <div key={index} className="hability">
                      <img src={skill.src} alt={skill.alt} />
                      <span>{skill.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>

          </div>

        </div>

      </div>
      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={DianaAHG} alt="Diana HG" />
        </ScrollAnimation>
      </div> */}
    </Container>
  );
}
