import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import project1 from "../../assets/project1.png";
import project2 from "../../assets/socialNetwork.png";
import project3 from "../../assets/Countries.png";
import project4 from "../../assets/shopping.png";
import project5 from "../../assets/altope.png";
import project6 from "../../assets/vokativa.png";
import { Container } from './styles';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Vokativa',
      image: project6,
      link: '../../assets/project1.png',
      techStack: ['Angular v18', 'PrimeNG', 'Tailwind', 'rxjs'],
    },
    {
      title: 'Altope App',
      image: project5,
      techStack: ['Angular v17', 'Firebase', 'Material Angular', 'xlsx'],
    },
    {
      title: 'Fake Store',
      image: project4,
      repoLink: 'https://github.com/DianaHuaripayta/fake-store',
      techStack: ['React', 'Redux', 'Styled Components', 'Axios'],
    },
    {
      title: 'Flags',
      image: project3,
      repoLink: 'https://github.com/DianaHuaripayta/Flag-project-react',
      techStack: ['React', 'Redux', 'Styled Components', 'Axios'],
    },
    {
      title: 'Social Network',
      image: project2,
      link: 'https://dianahuaripayta.github.io/LIM015-social-network/src/',
      repoLink: 'https://github.com/DianaHuaripayta/LIM015-social-network',
      techStack: ['Firebase', 'Javascript', 'Jest'],
    },
    {
      title: 'Data Lovers Ghibli',
      image: project1,
      link: 'https://dianahuaripayta.github.io/LIM015-data-lovers-ghibli/src/',
      repoLink: 'https://github.com/DianaHuaripayta/LIM015-data-lovers-ghibli',
      techStack: ['Javascript', 'Jest', 'GitHub', 'CSS'],
    },
  ];

  return (
    <Container id="project">
      <header>
      <h2>Proyectos</h2>
      </header>
    <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

    </Container>
   
  );
};

export default Projects;