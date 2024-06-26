import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { Helmet } from "react-helmet";

// IMGS
import img1 from "/src/img/campaments/estiu/Principal2.jpg"
import img2 from "/src/img/campaments/estiu/1.jpg"
import img3 from "/src/img/campaments/estiu/2.jpg"
import img4 from "/src/img/campaments/estiu/3.jpg"
import img5 from "/src/img/campaments/estiu/4.jpg"
import { FooterComponent } from "../../components/FooterComponent";



export function CEstiu(){
    return(
        <>
            <Helmet>
                <title>Campament d'Estiu</title>
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL = {img1}
                title = "Campament d'Estiu"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    El nostre campament d’estiu és el complement perfecte per a desconnectar i gaudir després d’un curs lectiu intens. 
                    Està dissenyat per a evadir-se de les noves tecnologies i poder adquirir valors ètics i morals, 
                    així com per a aprendre a tindre autonomia i prendre les seues pròpies decisions,  
                    oferint una experiència enriquidora i transformadora que mai oblidaran. 
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Durant l’estança, els participants se submergeixen en un entorn natural, lluny de dispositius electrònics, 
                    que els permet promoure les habilitats socials i emocionals corresponents de cada etapa. 
                    El programa se centra a promoure valors com l'amistat, la col·laboració, el respecte i l'empatia. 
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    Els xiquets i xiquetes participen en activitats a l’aire lliure, creatives, inclusives i de respecte als companys 
                    i companyes, mitjançant tallers, jocs, gimcanes, cançoners, espectacles. 
                    Tal com jugàvem abans que les noves tecnologies ens envaïren.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    L'absència d’aparells electrònics permet que els xiquets i xiquetes se centren en el present, 
                    millorant la seua capacitat per a concentrar-se, observar i apreciar l'entorn que els envolta. 
                    A més, es promou el desenvolupament d'habilitats pràctiques, com l'acampada, la cuina a l'aire 
                    lliure i l'orientació, la qual cosa contribueix a la confiança en si mateixos i a l'autosuficiència.
                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}