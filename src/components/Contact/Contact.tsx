import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contacto</h2>
        <p>¿Está listo para comenzar con su proyecto? </p>
        <p>Contácteme ahora para una consulta gratuita.</p>
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