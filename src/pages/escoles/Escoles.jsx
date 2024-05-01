import { HeaderComponent } from "../../components/HeaderComponent"
import { SectionTitle } from "../../components/SectionTitle"
import { ActivitatsMenu } from "../../components/ActivitatsMenu"
import { ActivitatsCard } from "../../components/ActivitatsCard"
import { ActivitatsCardNaranja } from "../../components/ActivitatsCardNaranja"
import { FooterComponent } from "../../components/FooterComponent"


// IMAGES
import estiu from "../../img/escoles de vacances/estiu/Principal.jpg"
import nadal from "../../img/escoles de vacances/nadal/Principal.jpg"
import pasqua from "../../img/escoles de vacances/pasqua/Principal.jpg"

import { useEffect } from "react"


export function Escoles(){

    return (
        <>

            <HeaderComponent />
            <SectionTitle>Escoles de Vacances</SectionTitle>
            <ActivitatsMenu>
                <ActivitatsCard 
                    titulo="Estiu" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={estiu}
                    pagina="/escoles-de-vacances/estiu"
                />
                <ActivitatsCardNaranja 
                    titulo="Nadal" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={nadal}
                    pagina="/escoles-de-vacances/nadal"
                />
                <ActivitatsCard 
                    titulo="Pasqua" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={pasqua}
                    pagina="/escoles-de-vacances/pasqua"
                />
            </ActivitatsMenu>

            <FooterComponent />

        
        </>
    )
}