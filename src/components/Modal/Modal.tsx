import React, { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { CarouselContainer, ModalClose, ModalContent, ModalList, ModalListItem, ModalOverlay, ModalText, ModalTitle } from "./styled";
interface Project {
  title: string;
  images: string[];
  description: string;
  techStack: string[];
}

interface ModalProps {
  project: Project |null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) {
    return null; // Si `project` no está definido, no renderizamos nada
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
      <ModalClose onClick={onClose}>&times;</ModalClose>
      <ModalTitle>{project.title || "Sin título"}</ModalTitle>
      <CarouselContainer>
        <Carousel project={project} />
      </CarouselContainer>
      <ModalText>
        {project.description || "Sin descripción disponible"}
      </ModalText>
      {project.techStack && project.techStack.length > 0 ? (
        <ModalList>
          {project.techStack.map((t, index) => (
            <ModalListItem key={index}>{t}</ModalListItem>
          ))}
        </ModalList>
      ) : (
        <ModalText>No hay tecnologías listadas.</ModalText>
      )}
    </ModalContent>
  </ModalOverlay>
  );
};

export default Modal;
