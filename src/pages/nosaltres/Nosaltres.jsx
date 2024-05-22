import { HeaderComponent } from "../../components/HeaderComponent"
import { SectionTitle } from "../../components/SectionTitle"
import { ActivitatsMenu } from "../../components/ActivitatsMenu"
import { ActivitatsCard } from "../../components/ActivitatsCard"
import { ActivitatsCardNaranja } from "../../components/ActivitatsCardNaranja"
import { FooterComponent } from "../../components/FooterComponent"

import quisom from "../../img/nosaltres/quisom/Principal.jpg"
import metodologia from "../../img/nosaltres/metodologia/Principal.jpg"
import valors from "../../img/nosaltres/principal.jpg"
import equip from "../../img/nosaltres/equip/Principal.jpg"
import treballa from "../../img/nosaltres/trabajo.jpg"

import { useEffect } from "react"
import { Helmet } from "react-helmet";


export function Nosaltres() {

    return (
        <>
            <Helmet>
                <title>Nosaltres</title>
            </Helmet>
            <HeaderComponent />
            <SectionTitle>Nosaltres</SectionTitle>
            <ActivitatsMenu>
                <ActivitatsCard
                    titulo="Qui Som"
                    texto="Xúquer Animació, fundada el 2022 a Albalat de la Ribera, busca transformar l'educació no formal. Prové de l'Associació Juvenil Xúquer Monitors, on es va treballar altruistament durant més de 10 anys. Ara, es busca professionalitzar i valorar tota aquesta experiència acumulada."
                    imgurl={quisom}
                    pagina="/nosaltres/qui-som"
                />
                <ActivitatsCardNaranja
                    titulo="Equip"
                    texto="Et presente l'equip de Xúquer Animació, comptem amb els millors professionals perquè aquells
                     que més estimem es senten com a casa, es divertisquen i aprenguen al mateix temps."
                    imgurl={equip}
                    pagina="/nosaltres/equip"
                />
                <ActivitatsCard
                    titulo="Valors"
                    texto="En Xúquer Animació prioritzem tot aquell aprenentatge que tinga la finalitat 
                    d’intentar que els xiquets i xiquetes siguen millors persones treballant els valors"
                    imgurl={valors}
                    pagina="/nosaltres/valors"
                />
                <ActivitatsCardNaranja
                    titulo="Metodologia"
                    texto="Pensem que d'aquesta forma col·laborem oferint una educació en valors a través 
                    d’un gran ventall d'activitats diferents a les habituals."
                    imgurl={metodologia}
                    pagina="/nosaltres/metodologia"
                />
                <ActivitatsCard
                    titulo="Treballa amb Nosaltres"
                    texto="Voleu treballar amb nosaltres? Escriviu-nos a contacte o al nostre correu electrònic."
                    imgurl={treballa}
                    pagina="/contacte"
                />
            </ActivitatsMenu>

            <FooterComponent />


        </>
    )
}