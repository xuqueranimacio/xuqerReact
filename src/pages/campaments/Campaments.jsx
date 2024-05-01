import { HeaderComponent } from "../../components/HeaderComponent"
import { SectionTitle } from "../../components/SectionTitle"
import { ActivitatsMenu } from "../../components/ActivitatsMenu"
import { ActivitatsCard } from "../../components/ActivitatsCard"
import { ActivitatsCardNaranja } from "../../components/ActivitatsCardNaranja"
import { FooterComponent } from "../../components/FooterComponent"

import estiu from "../../img/campaments/estiu/Principal.jpg"
import nadal from "../../img/campaments/nadal/5.jpg"
import pasquea from "../../img/campaments/pasqua/9.jpg"
import adults from "../../img/campaments/adults/Principal-min.jpg"
import multiaventura from "../../img/campaments/multiaventura/Principal.jpg"

import { useEffect } from "react"


export function Campaments(){

    return (
        <>

            <HeaderComponent />
            <SectionTitle>Campaments</SectionTitle>
            <ActivitatsMenu>
                <ActivitatsCard 
                    titulo="Estiu" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={estiu}
                    pagina="/campaments/estiu"
                />
                <ActivitatsCardNaranja 
                    titulo="Nadal" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={nadal}
                    pagina="/campaments/nadal"
                />
                <ActivitatsCard 
                    titulo="Pasqua" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={pasquea}
                    pagina="/campaments/pasqua"
                />
                <ActivitatsCardNaranja 
                    titulo="Adults" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={adults}
                    pagina="/campaments/adults"
                />
                <ActivitatsCard 
                    titulo="MultiAventura" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={multiaventura}
                    pagina="/campaments/multiaventura"
                />
            </ActivitatsMenu>

            <FooterComponent />

        
        </>
    )
}