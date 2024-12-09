import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 3rem; /* Ajustado para pantallas más pequeñas */
    margin-bottom: 2rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(29em, 1fr));
    gap: 5rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
     
      color: var(--blue);
      cursor: pointer;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, 
                  rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      position: relative;
    }

    .project:hover {
      transform: translateY(-5px);
      background-color: #016fb92b;
    }

    .project-hover-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      color: var(--white);
      background-color: var(--blue);
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.25s, transform 0.25s;
      pointer-events: none;
    }

    .project:hover .project-hover-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.2);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--blue);
      margin-bottom: 0.6rem;

      .project-links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      a > img {
        width: 2.5rem;
      }
    }
    body{
      img{
        height: 14em;
      width: 100%;
      object-fit: contain;
      }
    }
    h3 {
      margin-bottom: 2rem;
    }

    footer {
      margin-top: auto;

      .tech-list {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        font-size: 1.2rem;
        opacity: 0.6;
      }
    }
  }

  @media (max-width: 960px) {
    h2 {
      font-size: 2.5rem;
    }

    .projects {
      gap: 1.5rem;
    }

    .project {
      padding: 1.5rem 1.2rem;
    }
  }

  @media (max-width: 740px) {
    h2 {
      font-size: 2rem;
    }

    .projects {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .project {
      padding: 1rem;
    }
  }
`;
