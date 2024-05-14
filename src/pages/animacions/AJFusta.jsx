import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";

// IMGS
import img1 from "/src/img/animacions/jocs de fusta/Principal.png"
import img2 from "/src/img/animacions/jocs de fusta/1.png"
import img3 from "/src/img/animacions/jocs de fusta/2.png"
import img4 from "/src/img/animacions/jocs de fusta/3.png"
import img5 from "/src/img/animacions/jocs de fusta/4.png"
import img6 from "/src/img/animacions/jocs de fusta/5.png"



export function AJFusta() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Jocs De Fusta"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img1}>
                    El "Corn Hole" és un joc popular típic als Estats
                    Units. Consisteix a llançar bosses de blat cap a una
                    plataforma inclinada amb un forat a l'extrem
                    oposat. Cada plataforma es situa a una distància
                    fixa una de l'altra, i els jugadors llancen
                    alternativament les bosses intentant fer-les
                    passar pel forat o aterrar a la plataforma per
                    sumar punts. És un joc molt divertit.

                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img2}>
                    El "dominó” és un joc de taula que es juga amb
                    una sèrie de fitxes rectangulars, generalment
                    blanques per un costat i amb punts d'un a sis .
                    Jugar amb el dominó gegant és molt divertit. El
                    joc pot ser de dos a quatre jugadors i guanya qui
                    primer es queda sense fitxes o qui tinga menys
                    punts en les seues fitxes quan es produeix un
                    bloqueig i cap jugador no pot col·locar més fitxes.
                    És un joc d'estratègia i de càlcul que es practica a
                    tot el món i és especialment popular en països
                    com Mèxic, Cuba i República Dominicana
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img3}>
                    El "Jenga” és un joc de destresa
                    física i equilibri. Consisteix en una torre construïda amb blocs
                    de fusta apilats en forma de torre de tres blocs per fla, formant
                    inicialment una estructura sòlida. Cada jugador, per torns,
                    retira un bloc de la torre i el col·loca en la part superior, creant
                    així una torre més alta i menys estable. L'objectiu és evitar que
                    la torre es derruïsca durant el torn d'un mateix, ja que el jugador
                    que fa que la torre es derruïsca perd.

                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img4}>
                    El "Llançanell" és un joc popular que
                    implica llançar anells cap a un pal o una estructura similar, amb l'objectiu
                    d'encestar els anells en l'objectiu. Pot haver-hi diferents variants del joc,
                    com llançar els cèrcols des d'una distància específica o utilitzant diferents
                    tècniques de llançament. El joc de llançar anells és tant una activitat
                    recreativa com una competició, depenent de com s'estructure.

                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img5}>
                    El "Connecta4" també conegut com a Quatre en
                    Línia, és un joc d'estratègia per a dos jugadors. L'objectiu és ser el primer a
                    connectar quatre de les teues fitxes del mateix color en línia. És un joc
                    d'estratègia senzill, però que requereix pensar amb antelació i planificació
                    per bloquejar al teu oponent mentre busques la teua pròpia oportunitat de
                    connectar quatre fitxes. És un joc popular i fàcil d'aprendre, adequat per a
                    jugadors de totes les edats.

                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img6}>
                    El "Bitles” és un joc d'origen antic que implica
                    tombar un conjunt de bitlles, que són peces de
                    fusta allargades i generalment cilíndriques,
                    utilitzant un pal pesat. L'objectiu és tombar el
                    major nombre possible de bitlles amb cada
                    llançament del pal. El joc de les bitlles és
                    practicat en tot el món i pot ser tant una activitat
                    recreativa com una competició professional en
                    esdeveniments com lligues de bitlles i tornejos.


                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}