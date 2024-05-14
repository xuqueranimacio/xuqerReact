import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapperCustom, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"

// IMGS
import img1 from "/src/img/nosaltres/metodologia/Principal.jpg"
import img2 from "/src/img/nosaltres/metodologia/2.jpg"
import img3 from "/src/img/nosaltres/metodologia/3.jpg"
import img4 from "/src/img/nosaltres/metodologia/4.jpg"
import { FooterComponent } from "../../components/FooterComponent";



export function Metodologia() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Metodologia"
            />
            <InfoSectionWrapperCustom title="Metodologia">
                <InfoSectionCardRight imgURL={img1}>
                    Xúquer Animació és el resultat del treball i l'esforç realitzat per un grup de professionals especialitzats
                    en el sector educatiu i l'oci i el temps lliure, amb una experiència de més de 10 anys defensant una ensenyança
                    lúdica, participativa i inclusiva, en la qual cada participant rep l'aprenentatge de forma dinàmica i divertida.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img2}>
                    Pensem que d'aquesta forma col·laborem oferint una educació en valors a través d’un gran ventall d'activitats diferents
                    a les habituals. Entre aquestes podem trobar jocs, cançons, tallers, dinàmiques grupals, provocacions, etc. que suposen
                    per a ells i elles una gran font d'aprenentatge orientada al seu desenvolupament social i cultural, vinculat a un programa
                    d'animació que s'adapta a les diferents habilitats i interessos dels més menuts. Però que també té en compte els
                    distints grups d'edat, així com la gran diversitat de nivells maduratius que coexisteixen en un mateix grup.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img3}>
                    El nostre projecte està pensat per a treballar a través de diverses metodologies:
                    <br /><b>Metodologia activa</b>: treballant la imaginació i la creativitat de l'alumnat.
                    <br /><b>Metodologia participativa</b>: fomentant la participació de tots els i les membres.
                    <br /><b>Metodologia integradora</b>: potenciant la igualtat i la integració entre ells i elles.
                    <br /><b>Metodologia multidisciplinar</b>: fomentant l'aprenentatge a través de l'activitat física i mental de cada xiquet i xiqueta.

                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img4}>
                    Així mateix, els aspectes pedagògics que oferim a través d'aquest projecte són els següents :
                    <ol>
                        <li>Lliure expressió i creativitat </li>
                        <li>Educació en valors i hàbits </li>
                        <li>Acceptació i foment de la diversitat </li>
                        <li>Respecte del medi ambient</li>
                        <li>Responsabilitat</li>
                        <li>Treball en equip i cooperació </li>
                        <li>Diversió</li>
                    </ol>
                </InfoSectionCardLeft>
            </InfoSectionWrapperCustom>
            <FooterComponent />
        </>
    )
}