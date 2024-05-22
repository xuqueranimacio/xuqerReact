import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";

// IMGS
import img1 from "/src/img/animacions/jocs populars/Principal.jpg"
import img2 from "/src/img/animacions/jocs populars/1.jpg"
import img3 from "/src/img/animacions/jocs populars/2.jpg"
import img4 from "/src/img/animacions/jocs populars/3.jpg"
import img5 from "/src/img/animacions/jocs populars/4.jpg"

import { Helmet } from "react-helmet";


export function AJocs() {
    return (
        <>
            <Helmet>
                <title>Jocs Populars</title>
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Jocs"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    La nostra empresa ofereix una
                    àmplia varietat de jocs tradicionals i activitats recreatives que
                    són perfectes per animar qualsevol esdeveniment, des de festes
                    familiars fins a esdeveniments corporatius. Des de jocs clàssics
                    com la cursa de sacs, la cursa de culleres i la recerca del tresor,
                    fins a activitats més modernes com el bloq-equip o el tir amb
                    arc, tenim activitats per a tots els gustos i edats.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Els nostres jocs són una excel·lent
                    manera de fomentar el treball en equip i la competència
                    amistosa entre els participants.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    A més, el nostre equip d'animadors estarà allà per garantir que tot funcione sense problemes i per mantenir
                    l'ambient festiu en tot moment. Amb la seua energia contagiosa i el seu entusiasme, convertiran qualsevol
                    ocasió en una celebració inoblidable.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    No perdes l'oportunitat d'afegir un toc especial al teu pròxim esdeveniment!!
                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}