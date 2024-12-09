import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Card from "./styled";
interface ProjectCardProps {
  title: string;
  imgPortada?: string
  link?: string;
  repoLink?: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  techStack,
  imgPortada,
}) => {
  return (

    <ScrollAnimation animateIn="bounce">
    <Card>
      <header>
        <h3>{title}</h3>
      </header>
      <body>
        <img src={imgPortada} alt={title} />
      </body>
      <footer>
        <ul className="tech-list">
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </footer>
      <div className="project-hover-icon">+</div>
    </Card>
  </ScrollAnimation>
  );
};

export default ProjectCard;
