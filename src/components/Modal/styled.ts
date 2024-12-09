import styled, { keyframes } from "styled-components";

// Animación keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Estilos del modal
export const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  position: relative;
  animation: ${fadeIn} 0.3s ease-in-out;

  /* Media queries para pantallas pequeñas */
  @media (max-width: 768px) {
    width: 95%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 24px;
  background: none;
  border: none;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  color: #333;

  &:hover {
    color: var(--blue);
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    top: 5px;
    right: 10px;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: #1e3a8a;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const ModalText = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  letter-spacing: 0.12rem;
  margin: 2rem 4rem;
  background: #3498db21;
  padding: 20px;
  border-radius: 6px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1.5rem 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 1rem;
    padding: 10px;
  }
`;

export const ModalList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const ModalListItem = styled.li`
  background: #016fb999;
  color: white;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 6px 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
`;

export const CarouselContainer = styled.div`
  width: 90%;
  margin: auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
