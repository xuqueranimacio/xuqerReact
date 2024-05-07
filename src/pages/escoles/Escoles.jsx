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
                    texto="Estàs buscant la manera perfecta que els teus fills passen l'estiu? 
                    No busques més! En Xúquer Animació, oferim una experiència
                    d'estiu inoblidable plena de diversió, aprenentatge i aventures." 
                    imgurl={estiu}
                    pagina="/escoles-de-vacances/estiu"
                />
                <ActivitatsCardNaranja 
                    titulo="Nadal" 
                    texto="La nostra escola de Nadal està dissenyada per a xiquets i xiquetes de totes les edats,
                    oferint una experiència única on poden submergir-se en l'encant de la temporada." 
                    imgurl={nadal}
                    pagina="/escoles-de-vacances/nadal"
                />
                <ActivitatsCard 
                    titulo="Pasqua" 
                    texto="No deixes passar l'oportunitat que els teus fills formen part d'aquesta experiència única de Pasqua amb Xúquer Animació!
                    Celebra la Pasqua amb Xúquer Animació!" 
                    imgurl={pasqua}
                    pagina="/escoles-de-vacances/pasqua"
                />
            </ActivitatsMenu>

            <FooterComponent />

        
        </>
    )
}