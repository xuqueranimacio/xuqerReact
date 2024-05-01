import { HeaderComponent } from "../../components/HeaderComponent"
import { SectionTitle } from "../../components/SectionTitle"
import { ActivitatsMenu } from "../../components/ActivitatsMenu"
import { ActivitatsCard } from "../../components/ActivitatsCard"
import { ActivitatsCardNaranja } from "../../components/ActivitatsCardNaranja"
import { FooterComponent } from "../../components/FooterComponent"

import musical from "../../img/animacions/musical/11- que festín.jpg"
import aniversaris from "../../img/animacions/aniversaris/0BAD984C-03AD-4549-B1FA-E4342EE1AD12.jpg"
import excursions from "../../img/animacions/excursions/IMG_20230304_162003.jpg"
import scaperoom from "../../img/animacions/scape room/IMG_20221112_170538.jpg"
import jocspopulars from "../../img/animacions/jocs populars/IMG_20231228_120443.jpg"
import gimcanes from "../../img/animacions/gimcanes/3a81fdea-9fdf-4379-9a42-d21aa8a05db9.jpg"
import halloween from "../../img/animacions/halloween/principal.jpg"
import tallers from "../../img/animacions/tallers/IMG_20230311_170813.jpg"

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
                    imgurl={aniversaris}
                    pagina="/campaments/estiu"
                />
                <ActivitatsCardNaranja 
                    titulo="Metodologia" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={musical}
                    pagina="/campaments/nadal"
                />
                <ActivitatsCard 
                    titulo="Valors" 
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
                    titulo="Equip" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={jocspopulars}
                    pagina="/campaments/pasqua"
                />
                <ActivitatsCardNaranja 
                    titulo="Treballa amb Nosaltres" 
                    texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore alias qui sequi odit
                    repudiandae recusandae corrupti facere praesentium eligendi." 
                    imgurl={gimcanes}
                    pagina="/campaments/adults"
                />
            </ActivitatsMenu>

            <FooterComponent />

        
        </>
    )
}