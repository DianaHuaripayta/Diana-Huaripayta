import React, { useState } from "react";
import { Container } from "./styles";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Modal from "../../components/Modal/Modal";
import { projects } from "../../assets/Data/Projects";

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container id="project">
      <header>
        <h2>Proyectos</h2>
      </header>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} onClick={() => openModal(project)}>
            <ProjectCard key={index} {...project} />
          </div>
        ))}
        {isModalOpen && (
          <Modal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </Container>
  );
};

export default Projects;
