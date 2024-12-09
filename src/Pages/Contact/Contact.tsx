import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contacto</h2>
        <p>Te dejo mi correo para agendar una reunión </p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:dianahg1610@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:dianahg1610@gmail.com">dianahg1610@gmail.com</a>
        </div>
      </div>
    </Container>
  )
}