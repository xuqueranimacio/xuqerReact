import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"

// IMGS
import img1 from "/src/img/campaments/nadal/Principal.jpg"
import img2 from "/src/img/campaments/nadal/1.jpg"
import img3 from "/src/img/campaments/nadal/2.jpg"
import img4 from "/src/img/campaments/nadal/3.jpg"
import { FooterComponent } from "../../components/FooterComponent";


export function CNadal() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Campament de Nadal"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Al nostre campament de Nadal creem una experiència plena d'alegria i diversió per als participants.
                    Durant aquesta temporada festiva, oferim una varietat d'activitats temàtiques que inclouen manualitats
                    nadalenques, jocs interactius, cant de nadales i l'oportunitat de participar en la creació de decoracions festives.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    A més de les activitats lúdiques, fomentem valors com la generositat,
                    l'amistat, les tradicions, les celebracions i la solidaritat, mitjançant
                    dinàmiques de cooperació i treball en equip.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    Creem un ambient càlid i acollidor, ja que aquest campament permet als xiquets submergir-se en la
                    màgia de Nadal, creant records duradors i enfortint la connexió amb els seus companys.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    En resum, el nostre campament de Nadal ofereix una experiència festiva que combina la diversió,
                    la creativitat i la promoció de valors positius.
                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}