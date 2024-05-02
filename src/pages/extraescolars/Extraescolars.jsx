import { HeaderComponent } from "../../components/HeaderComponent"
import { SectionTitle } from "../../components/SectionTitle"
import { ActivitatsMenu } from "../../components/ActivitatsMenu"
import { ActivitatsCard } from "../../components/ActivitatsCard"
import { ActivitatsCardNaranja } from "../../components/ActivitatsCardNaranja"
import { FooterComponent } from "../../components/FooterComponent"


// IMAGES
import diverciencia from "../../img/extraescolars/diverciencia/P2.png"
import imaginart from "../../img/extraescolars/imaginart/Principal.png"
import legoblocks from "../../img/extraescolars/legoblocks/Principal.jpg"
import minixef from "../../img/extraescolars/minixef/Principal.png"
import patinatge from "../../img/extraescolars/patinatge/Principal.jpg"

import { useEffect } from "react"


export function Extraescolars() {

    return (
        <>

            <HeaderComponent />
            <SectionTitle>Extraescolars</SectionTitle>
            <ActivitatsMenu>
                <ActivitatsCard
                    titulo="Diverciència"
                    texto="Es l'activitat idònia per a que els xiquets/es s'apropen a diferents àrees de la ciència i la física a 
                    través d'experiments i jocs científics en els quals aprendran a descobrir l'entorn que els envolta."
                    imgurl={diverciencia}
                    pagina="/extraescolars/diverciencia"
                />
                <ActivitatsCardNaranja
                    titulo="Imaginart"
                    texto="El xiquet/a desenvoluparà la seua creativitat i imaginació de mil maneres, des de manualitats fins a 
                    treballs de tècniques de fang."
                    imgurl={imaginart}
                    pagina="/extraescolars/imaginart"
                />
                <ActivitatsCard
                    titulo="LegoBlocks"
                    texto="En aquesta activitat el xiquet/a treballarà la consciència espacial, l'habilitat de raonar, 
                    la lògica, la creativitat i la concentració; a banda de divertir-se i treballar alguns conceptes mecànics, 
                    mentre realitza construccions i altres muntatges."
                    imgurl={legoblocks}
                    pagina="/extraescolars/legoblocks"
                />
                <ActivitatsCardNaranja
                    titulo="Minixef"
                    texto="Dirigida als més valents i valentes, els quals se'n menjaran la cuina siga la seua passió. En aquesta
                     activitat aprendran a realitzar receptes bàsiques de cuina, i també s'educaran en hàbits saludables d'alimentació i cuina."
                    imgurl={minixef}
                    pagina="/extraescolars/minixef"
                />
                <ActivitatsCard
                    titulo="Patinatge"
                    texto="És l'activitat perfecta per a que el xiquet/a aprenga a desenvolupar tècniques per a aprendre
                     o perfeccionar slalom, girs i frenades del patinatge, mitjançant dinàmiques i jocs. Una activitat que
                      combina la diversió i la pràctica d'esport."
                    imgurl={patinatge}
                    pagina="/extraescolars/patinatge"
                />
            </ActivitatsMenu>

            <FooterComponent />


        </>
    )
}