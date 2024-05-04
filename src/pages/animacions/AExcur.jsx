import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";

// IMGS
import img1 from "/src/img/animacions/excursions/Principal.jpg"
import img2 from "/src/img/animacions/excursions/1.jpg"
import img3 from "/src/img/animacions/excursions/2.jpg"
import img4 from "/src/img/animacions/excursions/3.jpg"
import img5 from "/src/img/animacions/excursions/4.jpg"



export function AExcur() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Excursions"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    ¡Descobreix amb nosaltres infinitat de llocs!
                    La nostra empresa t'ofereix l'oportunitat d'explorar paisatges impressionants i gaudir d'activitats
                    a l'aire lliure en companyia dels nostres monitors i monitores. Des de rutes de senderisme per paratges
                    naturals fins a emocionants expedicions en bicicleta de muntanya, teatres, competicions d’esports,
                    les nostres excursions estan dissenyades per a satisfer els desitjos d'aventura de persones de totes
                    les edats i nivells d'experiència
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Organitzem excursions per a grups menuts i grans, adaptades als teus interessos i preferències.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    A més, les nostres excursions són una excel·lent oportunitat per desconnectar de la rutina diària, 
                    relaxar-te i renovar energies mentre et submergeixes en la bellesa i tranquil·litat de la natura.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    No et perdes l'oportunitat de viure una experiència única i emocionant amb les excursions de 
                    Xúquer Animació. T’esperem!!
                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}