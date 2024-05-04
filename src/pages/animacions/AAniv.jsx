import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";

// IMGS
import img1 from "/src/img/animacions/aniversaris/Principal.jpg"
import img2 from "/src/img/animacions/aniversaris/4.jpg"
import img3 from "/src/img/animacions/aniversaris/5.jpg"
import img4 from "/src/img/animacions/aniversaris/6.jpg"
import img5 from "/src/img/animacions/aniversaris/4.jpg"



export function AAniv() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Aniversaris"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    A la nostra cultura valenciana els aniversaris son essencials per a crear
                    moments inoblidables i celebrar amb alegria cada any que passa.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Aquesta animació aporta un element de diversió i entreteniment fent els aniversaris
                    més emocionants. Amb activitats com jocs, gimcanes, escape rooms creant un ambient
                    festiu per als participants. Aquesta animació s’adapta a diferents edats i interessos,
                    fent que tots els convidats siguen part de la celebració. Des dels més menuts fins als més grans
                    , amb diverses opcions d'animació.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    En resum, Xúquer Animació et proporciona moments de felicitat que perduren  amb el temps!
                </InfoSectionCardRight>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}