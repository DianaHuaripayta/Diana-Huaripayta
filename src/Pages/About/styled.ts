import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  .skills-grid {
    display: grid;
    gap: 1.5rem;
    margin-top: 1.6rem;

    /* Grid layout: 5 columnas en desktop */
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: 960px) {
      /* 3 columnas en tablets */
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
      /* 2 columnas en mobile */
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .hard-skills {
    display: grid;
    gap: 1.5rem;
    margin-top: 1.6rem;

    /* Para pantallas grandes, muestra 5 columnas */
    grid-template-columns: repeat(0, 1fr);

    @media (max-width: 960px) {
      /* Para pantallas medianas, muestra 3 columnas */
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
      /* Para pantallas móviles, muestra 2 columnas */
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 3.4rem;
      height: auto;
      margin-bottom: 0.8rem;
    }

    span {
      font-size: 1.4rem;
      color: #333;
      font-weight: 600;
    }
  }

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 1em;
  }
  h3 {
    text-align: left;
    font-size: 1.8rem;
    margin-top: 1em;
    color:var(--blue);
  }
  @media (max-width: 960px) {
    .hard-skills {
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
      gap: 1rem;
    }

    .hability {
      padding: 0.8rem;
      img {
        width: 3rem;
      }
      span {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 480px) {
    .hard-skills {
      grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    }

    .hability {
      padding: 0.6rem;
      img {
        width: 2.5rem;
      }
      span {
        font-size: 1rem;
      }
    }
  }
`;
