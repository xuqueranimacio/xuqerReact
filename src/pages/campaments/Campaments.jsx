import { HeaderComponent } from "../../components/HeaderComponent"
import { SectionTitle } from "../../components/SectionTitle"
import { ActivitatsMenu } from "../../components/ActivitatsMenu"
import { ActivitatsCard } from "../../components/ActivitatsCard"
import { ActivitatsCardNaranja } from "../../components/ActivitatsCardNaranja"
import { FooterComponent } from "../../components/FooterComponent"

import estiu from "../../img/campaments/estiu/Principal.jpg"
import nadal from "../../img/campaments/nadal/5.jpg"
import pasquea from "../../img/campaments/pasqua/Principal.jpg"
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
                    texto="El nostre campament d’estiu és el complement perfecte per a desconnectar i gaudir després d’un curs lectiu intens. " 
                    imgurl={estiu}
                    pagina="/campaments/estiu"
                />
                <ActivitatsCardNaranja 
                    titulo="Nadal" 
                    texto="Al nostre campament de Nadal creem una experiència plena d'alegria i diversió per als participants." 
                    imgurl={nadal}
                    pagina="/campaments/nadal"
                />
                <ActivitatsCard 
                    titulo="Pasqua" 
                    texto="Al nostre campament de pasqua ens centrem a proporcionar als xiquets una experiència divertida i gratificant." 
                    imgurl={pasquea}
                    pagina="/campaments/pasqua"
                />
                <ActivitatsCardNaranja 
                    titulo="Adults" 
                    texto="El nostre campament d’adults és una experiència única en la qual hem volgut
                    que la persona adulta puga desconnectar de la seua rutina diària i les responsabilitats personals." 
                    imgurl={adults}
                    pagina="/campaments/adults"
                />
                <ActivitatsCard 
                    titulo="MultiAventura" 
                    texto="Els nostres campaments de multiaventura són experiències emocionants
                    i variades que combinen diferents activitats a l'aire lliure per a
                    oferir als i les participants una aventura integral." 
                    imgurl={multiaventura}
                    pagina="/campaments/multiaventura"
                />
            </ActivitatsMenu>

            <FooterComponent />

        
        </>
    )
}