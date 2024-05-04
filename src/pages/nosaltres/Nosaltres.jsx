import { HeaderComponent } from "../../components/HeaderComponent"
import { SectionTitle } from "../../components/SectionTitle"
import { ActivitatsMenu } from "../../components/ActivitatsMenu"
import { ActivitatsCard } from "../../components/ActivitatsCard"
import { ActivitatsCardNaranja } from "../../components/ActivitatsCardNaranja"
import { FooterComponent } from "../../components/FooterComponent"

import quisom from "../../img/nosaltres/quisom/Principal.jpg"
import metodologia from "../../img/nosaltres/metodologia/1.png"
import valors from "../../img/nosaltres/metodologia/2.png"
import equip from "../../img/nosaltres/equip/Principal.jpg"
import treballa from "../../img/nosaltres/trabajo.jpg"

import { useEffect } from "react"


export function Nosaltres() {

    return (
        <>

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
                    texto="Et presento l'equip de Xuquer Animació, comptem amb els millors professionals perquè aquells
                     que més estimem es sentin com a casa, es diverteixin i aprenguin al mateix temps."
                    imgurl={equip}
                    pagina="/nosaltres/equip"
                />
                <ActivitatsCard
                    titulo="Valors"
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi."
                    imgurl={valors}
                    pagina="/nosaltres/valors"
                />
                <ActivitatsCardNaranja
                    titulo="Metodologia"
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi."
                    imgurl={metodologia}
                    pagina="/nosaltres/metodologia"
                />
                <ActivitatsCard
                    titulo="Treballa amb Nosaltres"
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi."
                    imgurl={treballa}
                    pagina="/contacte"
                />
            </ActivitatsMenu>

            <FooterComponent />


        </>
    )
}