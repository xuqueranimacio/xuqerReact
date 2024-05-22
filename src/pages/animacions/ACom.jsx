import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";

// IMGS
import img1 from "/src/img/animacions/comunions/Principal.jpg"
import img2 from "/src/img/animacions/comunions/1.jpg"
import img3 from "/src/img/animacions/comunions/2.jpg"
import img4 from "/src/img/animacions/comunions/3.jpg"
import img5 from "/src/img/animacions/comunions/4.jpg"

import { Helmet } from "react-helmet";


export function ACom() {
    return (
        <>
            <Helmet>
                <title>Comunions</title>
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Comunions"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Xúquer Animació és la teua millor opció per a
                    convertir la comunió del teu fill o filla en un dia inoblidable. Amb la seua
                    experiència i creativitat, Xúquer Animació ofereix un paquet d'animació ple
                    de diversió i entreteniment per als més menuts i les seues famílies, sempre
                    personalitzat a les necessitats dels usuaris.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Imagina un dia ple de rialles, jocs i activitats dissenyades especialment per als xiquets i xiquetes.
                    Des de espectacles de màgia fins a tallers creatius, passant per jocs interactius i molta
                    música, Xúquer Animació garanteix una experiència única i emocionant per a tots els convidats.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    A més, el nostre equip d’animadors i animadores altament capacitats s'encarrega de cuidar cada detall,
                    assegurant que tant els xiquets com els adults gaudisquen al màxim de la celebració.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    No ho penseu més i confieu en Xúquer Animació per a fer de la comunió del vostre fill/a un esdeveniment inoblidable.
                    <br /><br />Deixeu que la màgia comence!
                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}