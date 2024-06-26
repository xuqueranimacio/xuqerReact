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
import jocsdefusta from "../../img/animacions/jocs de fusta/Principal.png"
import comunions from "../../img/animacions/comunions/Principal.jpg"

import { useEffect } from "react"

import { Helmet } from "react-helmet";



export function Animacions() {

    return (
        <>
            <Helmet>
                <title>Animacions</title>
            </Helmet>
            <HeaderComponent />
            <SectionTitle>Animacions</SectionTitle>
            <ActivitatsMenu>

                <ActivitatsCardNaranja
                    titulo="Comunions"
                    texto=" Xúquer Animació és la teua millor opció per a convertir la 
                    comunió del teu fill o filla en un dia inoblidable."
                    imgurl={comunions}
                    pagina="/animacions/comunions"
                />
                <ActivitatsCard
                    titulo="Aniversaris"
                    texto="A la nostra cultura valenciana els
                    aniversaris són essencials per a crear moments inoblidables i
                    celebrar amb alegria cada any que passa."
                    imgurl={aniversaris}
                    pagina="/animacions/aniversaris"
                />

                <ActivitatsCardNaranja
                    titulo="Musical"
                    texto="Els musicals de Xúquer Animació són molt més que simples espectacles; són moments de
                     creativitat i diversió, en la que els nostres xiquets, xiquetes i familiars gaudeixen d’un dia inoblidable."
                    imgurl={musical}
                    pagina="/animacions/musical"
                />
                <ActivitatsCard
                    titulo="Halloween"
                    texto="Prepara't per viure una experiència
                    terrorífcament emocionant amb els nostres passatges del
                    terror!"
                    imgurl={halloween}
                    pagina="/animacions/halloween"
                />

                <ActivitatsCardNaranja
                    titulo="Escape Room"
                    texto="Descobreix una aventura plena
                    d'intriga i emoció amb els nostres escape rooms. Endinsa’t en un
                    desafament on el temps corre en contra teua i sols el teu enginy
                    i treball en equip et portaran a la victòria."
                    imgurl={scaperoom}
                    pagina="/animacions/scape-room"
                />
                <ActivitatsCard
                    titulo="Jocs"
                    texto="Els nostres jocs són una excel·lent manera de fomentar el
                    treball en equip i la competència amistosa entre els
                    participants."
                    imgurl={jocspopulars}
                    pagina="/animacions/jocs-populars"
                />
                <ActivitatsCardNaranja
                    titulo="Gimcanes"
                    texto="Endinsa't en una aventura plena de
                    diversió i emoció amb les gimcanes de Xúquer Animació!"
                    imgurl={gimcanes}
                    pagina="/animacions/gimcanes"
                />
                <ActivitatsCard
                    titulo="Excursions"
                    texto="Organitzem excursions per a grups menuts i grans, adaptades als teus interessos i preferències."
                    imgurl={excursions}
                    pagina="/animacions/excursions"
                />
                <ActivitatsCardNaranja
                    titulo="Tallers"
                    texto="T’oferim una àmplia varietat de tallers dissenyats per a totes les edats i interessos. Des
                    de tallers de manualitats i art fins a tallers de cuina i música, tenim alguna cosa per a cada
                    gust i preferència."
                    imgurl={tallers}
                    pagina="/animacions/tallers"
                />
                <ActivitatsCard
                    titulo="Jocs de Fusta"
                    texto="Els nostres jocs de fusta són
                    perfectes per portar a esdeveniments a l'aire lliure. Comptem
                    amb una gran varietat que permet el joc lliure i l’exploració."
                    imgurl={jocsdefusta}
                    pagina="/animacions/jocs-de-fusta"
                />
            </ActivitatsMenu>

            <FooterComponent />


        </>
    )
}