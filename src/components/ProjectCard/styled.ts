import styled from 'styled-components';

const Card = styled.div`
  padding: 2rem 1.8rem;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, 
              rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 15px;
    background-color: #f4f8fc;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 1.5rem;

    h3 {
      font-size: 1.8rem;
      font-weight: bold;
      color: var(--blue);
      margin: 0;
    }
  }

  footer {
    margin-top: auto;

    .tech-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 1.2rem;
        color: #555555;
        background-color: #f0f0f0;
        border-radius: 0.8rem;
        padding: 0.4rem 0.8rem;
        transition: background-color 0.3s ease, transform 0.2s ease;
      }
    }
  }

  .project-hover-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    color: var(--white);
    background-color: var(--blue);
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
  }

  &:hover .project-hover-icon {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

export default Card;
