import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";

// IMGS
import img1 from "/src/img/animacions/scape room/Principal.jpg"
import img2 from "/src/img/animacions/scape room/1.jpg"
import img3 from "/src/img/animacions/scape room/2.jpg"

export function AScap() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Escape Room"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Descobreix una aventura plena
                    d'intriga i emoció amb els nostres escape rooms. Endinsa’t en un
                    desafament on el temps corre en contra teua i sols el teu enginy
                    i treball en equip et portaran a la victòria.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    No perdes l'oportunitat de viure una experiència única i emocionant amb els escape rooms de Xúquer Animació.
                    Reserva la teua sessió ara i prepara't per a desafiar la teua ment i els teus sentits en una aventura que mai oblidaràs!
                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}