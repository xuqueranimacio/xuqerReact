import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"

// IMGS
import img1 from "/src/img/campaments/esportius/Principal.jpg"
import img2 from "/src/img/campaments/esportius/1.jpg"
import img3 from "/src/img/campaments/esportius/2.jpg"
import img4 from "/src/img/campaments/esportius/3.jpg"
import img5 from "/src/img/campaments/esportius/4.jpg"
import img6 from "/src/img/campaments/esportius/5.jpg"
import img7 from "/src/img/campaments/esportius/6.jpg"
import img8 from "/src/img/campaments/esportius/7.jpg"
import img9 from "/src/img/campaments/esportius/8.jpg"
import { FooterComponent } from "../../components/FooterComponent";
import { Helmet } from "react-helmet";




export function CEsportius() {
    return (
        <>
            <Helmet>
                <title>Campament Esportius</title>    
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Esportius"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Els nostres campaments esportius estan pensats per a fomentar el treball en equip i
                    millorar els resultats en l’àmbit esportiu. Així mateix, també presenten les característiques següents:
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    <b>Promoció de la companyia:</b> brinden un entorn propici perquè els jugadors o  les jugadores construïsquen relacions sòlides entre si. La convivència diària, les activitats conjuntes i els desafiaments esportius enforteixen els llaços personals, la qual cosa es tradueix en una major harmonia i comprensió en el terreny de joc.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    <b>Desenvolupament de la comunicació:</b> la comunicació efectiva és essencial en qualsevol equip esportiu. Durant el campament, els jugadors o les jugadores aprenen a expressar les seues idees de manera clara, a escoltar als seus companys o companyes i a coordinar-se per a aconseguir objectius comuns. Aquestes habilitats són fonamentals per a l'èxit del treball en equip.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    <b>Foment de la confiança:</b> qualsevol esport requereix confiança en si mateix i en els seus companys o companyes d'equip. Els campaments proporcionen oportunitats per a enfrontar desafiaments junts, superar obstacles i celebrar assoliments col·lectius, enfortint la confiança individual i grupal.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img6}>
                    <b>Resolució de conflictes: </b>en qualsevol equip sorgeixen conflictes i desafiaments. El campament ofereix un ambient controlat en el qual els jugadors i les jugadores aprenen a resoldre disputes de manera constructiva, a tolerar diferències i a treballar junts per a superar obstacles, habilitats essencials per a un treball en equip efectiu.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img7}>
                    <b>Entrenament tàctic i estratègic:</b> els campaments no sols se centren a millorar les habilitats individuals, sinó també a perfeccionar les tàctiques i estratègies de joc en equip. Els jugadors i les jugadores aprenen a entendre el joc des d'una perspectiva col·lectiva, identificant com cada posició i jugador/a contribueix al rendiment general de l'equip.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img8}>
                    <b>Construcció de rols i responsabilitats:</b> en un bon equip, cada jugador/a comprén el seu paper específic i assumeix responsabilitats concordes amb eixe rol. Permeten que els jugadors o les jugadores exploren diferents posicions, comprenguen la importància de la seua funció en l'equip i desenvolupen un sentit de responsabilitat cap al grup.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img9}>
                En resum, els nostres campaments esportius són fonamentals per a cultivar no sols les habilitats individuals dels jugadors i les jugadores, sinó també per a forjar un sòlid treball en equip. Des de la construcció de relacions interpersonals fins al desenvolupament d'habilitats tàctiques i estratègiques, aquests campaments contribueixen significativament a l'èxit i al rendiment col·lectiu en el terreny de joc.
                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}