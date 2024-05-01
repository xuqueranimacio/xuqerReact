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


export function Extraescolars(){

    return (
        <>

            <HeaderComponent />
            <SectionTitle>Extraescolars</SectionTitle>
            <ActivitatsMenu>
                <ActivitatsCard 
                    titulo="Diverciència" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={diverciencia}
                    pagina="/extraescolars/diverciencia"
                />
                <ActivitatsCardNaranja 
                    titulo="Imaginart" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={imaginart}
                    pagina="/extraescolars/imaginart"
                />
                <ActivitatsCard 
                    titulo="LegoBlocks" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={legoblocks}
                    pagina="/extraescolars/legoblocks"
                />
                <ActivitatsCardNaranja 
                    titulo="Minixef" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={minixef}
                    pagina="/extraescolars/minixef"
                />
                <ActivitatsCard 
                    titulo="Patinatge" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={patinatge}
                    pagina="/extraescolars/patinatge"
                />
            </ActivitatsMenu>

            <FooterComponent />

        
        </>
    )
}