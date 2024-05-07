import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapperCustom, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"

// IMGS
import img1 from "/src/img/nosaltres/quisom/Principal.jpg"
import circles from "/src/img/nosaltres/valors.png"
import { FooterComponent } from "../../components/FooterComponent";

import { useEffect } from "react"



export function Valors() {

    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Valors"
            />
            <InfoSectionWrapperCustom title="Valors">
                <p className="valorsText">En Xúquer Animació prioritzem tot aquell aprenentatge que tinga la finalitat d’intentar que els xiquets i xiquetes siguen millors persones treballant els valors següents: </p>
                <div className="circleContainer">
                    <img src={circles} className="circles"/>
                </div>
            </InfoSectionWrapperCustom>
            <FooterComponent />
        </>
    )
}

function generarHexAleatorio() {
    var letrasHex = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letrasHex[Math.floor(Math.random() * 16)];
    }
    return color;
  }