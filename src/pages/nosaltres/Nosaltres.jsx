import { HeaderComponent } from "../../components/HeaderComponent"
import { SectionTitle } from "../../components/SectionTitle"
import { ActivitatsMenu } from "../../components/ActivitatsMenu"
import { ActivitatsCard } from "../../components/ActivitatsCard"
import { ActivitatsCardNaranja } from "../../components/ActivitatsCardNaranja"
import { FooterComponent } from "../../components/FooterComponent"

import musical from "../../img/animacions/musical/Principal.jpg"
import aniversaris from "../../img/animacions/aniversaris/Principal.jpg"
import excursions from "../../img/animacions/excursions/Principal.jpg"
import scaperoom from "../../img/animacions/scape room/Principal.jpg"
import jocspopulars from "../../img/animacions/jocs populars/Principal.jpg"
import gimcanes from "../../img/animacions/gimcanes/Principal.jpg"
import halloween from "../../img/animacions/halloween/principal.jpg"
import tallers from "../../img/animacions/tallers/Principal.jpg"

import { useEffect } from "react"


export function Nosaltres(){

    return (
        <>

            <HeaderComponent />
            <SectionTitle>Animacions</SectionTitle>
            <ActivitatsMenu>
                <ActivitatsCard 
                    titulo="Aniversaris" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={aniversaris}
                    pagina="/campaments/estiu"
                />
                <ActivitatsCardNaranja 
                    titulo="Musical" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={musical}
                    pagina="/campaments/nadal"
                />
                <ActivitatsCard 
                    titulo="Excursions" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={excursions}
                    pagina="/campaments/pasqua"
                />
                <ActivitatsCardNaranja 
                    titulo="Scape Room" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={scaperoom}
                    pagina="/campaments/adults"
                />
                <ActivitatsCard 
                    titulo="Jocs Populars" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={jocspopulars}
                    pagina="/campaments/pasqua"
                />
                <ActivitatsCardNaranja 
                    titulo="Gimcanes" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={gimcanes}
                    pagina="/campaments/adults"
                />
                <ActivitatsCard 
                    titulo="Halloween" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={halloween}
                    pagina="/campaments/pasqua"
                />
                <ActivitatsCardNaranja 
                    titulo="Tallers" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={tallers}
                    pagina="/campaments/adults"
                />
            </ActivitatsMenu>

            <FooterComponent />

        
        </>
    )
}