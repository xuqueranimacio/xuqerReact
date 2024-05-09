import { HeaderComponent } from "../components/HeaderComponent"
import { ImageWrapper } from "../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../components/InfoSection"
import { FooterComponent } from "../components/FooterComponent";

// IMGS
import img1 from "/src/img/animacions/aniversaris/Principal.jpg"
import img2 from "/src/img/animacions/aniversaris/4.jpg"
import img3 from "/src/img/animacions/aniversaris/5.jpg"
import img4 from "/src/img/animacions/aniversaris/6.jpg"
import img5 from "/src/img/animacions/aniversaris/4.jpg"



export function Contacte() {
    return (
        <>
            <HeaderComponent />
            <section className="container formContainer">
          <form
            action="https://formspree.io/f/mleqbbyd"
            method="POST"
            className="myForm"
          >
            <h2>Correu Electrònic</h2>
            <div class="inputForm">
              <input type="email" name="email" placeholder="CorreuElectronic@exemple.es"/>
            </div>
            <h2>Missatge</h2>
            <div className="inputForm">
              <textarea name="message" placeholder="Què vols fer-nos saber?"></textarea>
            </div>
            
            <div class="twoForm">
                <div className="flexForm">
                    <h2>Nombre</h2>
                    <input type="text" name="Nombre" />
                </div>
                <div className="flexForm">
                    <h2>Apellidos</h2>
                    <input type="text" name="Apellidos" />
                </div>
            </div>

            <h2>Telèfon</h2>
            <div className="inputForm">
                <input type="text" name="Telefono" />
            </div>
            <br /><br />
            <button type="submit" className="contact-activitats botonrj">
              Enviar
            </button>
            <p>*Xúquer Animació no guardarà cap de les dades, ni compartirà estos mateixos a cap altra entitat o persona.</p>
          </form>
      </section>
            <FooterComponent />
        </>
    )
}