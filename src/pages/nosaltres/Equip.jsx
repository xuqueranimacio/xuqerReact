import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapperCustom, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"
import { Helmet } from "react-helmet";

// IMGS
import img1 from "/src/img/nosaltres/equip/Principal.jpg"
import img2 from "/src/img/nosaltres/equip/1.jpg"
import img3 from "/src/img/nosaltres/equip/2.jpg"
import amadeo from "/src/img/nosaltres/equip/amadeo2.png"
import marta from "/src/img/nosaltres/equip/marta2.png"
import { FooterComponent } from "../../components/FooterComponent";



export function Equip() {
    return (
        <>
            <Helmet>
                <title>Equip</title>
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="EQUIP"
            />
            <InfoSectionWrapperCustom title="el nostre equip">
                <InfoSectionCardRight imgURL={marta}>
                    <h3>Marta Sarrió Meseguer</h3>
                    <ul>
                        <li>Orientadora Educativa</li>
                    </ul>
                </InfoSectionCardRight>
                <InfoSectionCardRight imgURL={amadeo}>
                    <h3>Amadeo Estrelles Marimón</h3>
                    <ul>
                        <li>Formador d’Animadors.</li>
                        <li>Director d'Activitats de Temps Lliure.</li>
                        <li>Tècnic Superior en Animació Sociocultural i Turística.</li>
                    </ul>
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img1}>
                   <h3>Equip de monitors i monitores</h3>
                   <ul>
                    <li>Graduats en Educació Infantil.</li>
                    <li>Graduats en Educació Primària.</li>
                    <li>Monitors d'Activitats del Temps Lliure.</li>
                   </ul>
                </InfoSectionCardLeft>
            </InfoSectionWrapperCustom>
            <FooterComponent />
        </>
    )
}