import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react'
import Resume from '../../assets/Curriculum-vitae.pdf'
export function Header() {
  const [isActive, setActive] = useState(false)
  const [theme, setTheme] = useState('light'); // Estado inicial como 'light'
  // Aplica el tema automáticamente al cargar el componente
  useEffect(() => {
    const html = document.documentElement; // Selecciona el <html>
    html.classList.add(theme);
  }, [theme]);

  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"Diana "}</span>
          <span>{"Huaripayta"}</span>
        </HashLink>
        {/* <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        /> */}
        {/* <label htmlFor="switch">Toggle</label> */}
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            Acerca de mí
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Proyectos
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contacto
          </NavHashLink>
          <a href={Resume} download className="btn-color button">
            CV
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
