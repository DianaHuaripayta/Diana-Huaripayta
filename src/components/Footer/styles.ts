import styled from "styled-components";

export const Container = styled.footer`
  background-color: #f5f5f550;
  padding: 1rem 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  .logo {
    font-size: 2.4rem;
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem; /* Ajusta el tamaño del texto */
    text-align: center;

    img {
      width: 2.4rem;
      animation: spinning 5s infinite linear;
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;

      img {
        width: 3rem;
        height: 3rem;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Ajustes responsivos */
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;

    p {
      font-size: 1.2rem;
      justify-content: center;
    }

    .social-media {
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
    gap: 1rem;

    p {
      font-size: 1rem;
    }

    .social-media img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
