import { HeaderComponent } from "../../components/HeaderComponent"
import { SectionTitle } from "../../components/SectionTitle"
import { ActivitatsMenu } from "../../components/ActivitatsMenu"
import { ActivitatsCard } from "../../components/ActivitatsCard"
import { ActivitatsCardNaranja } from "../../components/ActivitatsCardNaranja"
import { FooterComponent } from "../../components/FooterComponent"

import quisom from "../../img/nosaltres/quisom/Principal.jpg"
import metodologia from "../../img/nosaltres/metodologia/1.png"
import valors from "../../img/nosaltres/metodologia/2.png"
import scaperoom from "../../img/animacions/scape room/Principal.jpg"
import jocspopulars from "../../img/animacions/jocs populars/Principal.jpg"

import { useEffect } from "react"


export function Nosaltres(){

    return (
        <>

            <HeaderComponent />
            <SectionTitle>Nosaltres</SectionTitle>
            <ActivitatsMenu>
                <ActivitatsCard 
                    titulo="Qui Som" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={quisom}
                    pagina="/nosaltres/qui-som"
                />
                <ActivitatsCardNaranja 
                    titulo="Metodologia" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={metodologia}
                    pagina="/nosaltres/metodologia"
                />
                <ActivitatsCard 
                    titulo="Valors" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={valors}
                    pagina="/nosaltres/valors"
                />
                <ActivitatsCardNaranja 
                    titulo="Equip" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={scaperoom}
                    pagina="/nosaltres/equip"
                />
                <ActivitatsCard 
                    titulo="Treballa amb Nosaltres" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={jocspopulars}
                    pagina="/contacte"
                />
            </ActivitatsMenu>

            <FooterComponent />

        
        </>
    )
}