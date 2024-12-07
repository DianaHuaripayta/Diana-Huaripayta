import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/externalLink.svg";
interface ProjectCardProps {
  title: string;
  image: string;
  link?: string;
  repoLink?: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  link,
  repoLink,
  techStack,
}) => {
  return (

    <ScrollAnimation animateIn="bounce">
      <div className="project">
        <div className="body">
          <img src={image} alt={title} width="350" height="190" />
        </div>
        <header>
        <h3>{title}</h3>
          <div className="project-links">
            {repoLink && (
              <a href={repoLink} target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub Repo" />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit Site" />
              </a>
            )}
          </div>
        </header>
        <footer>
          <ul className="tech-list">
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </footer>
      </div>
    </ScrollAnimation>
  );
};

export default ProjectCard;
