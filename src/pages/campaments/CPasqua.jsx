import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"

// IMGS
import img1 from "/src/img/campaments/pasqua/Principal.jpg"
import img2 from "/src/img/campaments/pasqua/1.jpg"
import img3 from "/src/img/campaments/pasqua/2.jpg"
import img4 from "/src/img/campaments/pasqua/3.jpg"
import img5 from "/src/img/campaments/pasqua/4.jpg"
import img6 from "/src/img/campaments/pasqua/5.jpg"
import img7 from "/src/img/campaments/pasqua/6.jpg"
import img8 from "/src/img/campaments/pasqua/7.jpg"
import img9 from "/src/img/campaments/pasqua/8.jpg"
import img10 from "/src/img/campaments/pasqua/9.jpg"
import { FooterComponent } from "../../components/FooterComponent";


export function CPasqua() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Campament de Pasqua"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Al nostre campament de pasqua ens centrem a proporcionar als xiquets una experiència divertida i gratificant.
                    En aquest ens enfoquem en una varietat d'activitats i jocs creatius que principalment busquen transmetre
                    l'alegria i l’emoció característiques d’aquesta temporada vacacional.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Les activitats inclouen manualitats temàtiques, jocs a l'aire lliure, cerca d'ous de Pasqua i
                    tallers que fomenten la creativitat i l'expressió individual. Mitjançant aquestes es promouen
                    valors com l'amistat, la cooperació i el respecte, creant un ambient inclusiu en el qual els
                    xiquets i xiquetes poden gaudir, aprendre i desenvolupar habilitats socials.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    És un campament més reduït que el d’estiu, així que també presenta certs avantatges,
                    ja que et permet conéixer més a cadascun dels i les participants.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    En resum, el nostre campament de pasqua ofereix una combinació única de diversió,
                    creativitat i ensenyaments valuosos perquè els xiquets puguen viure unes vacances inoblidables.
                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}