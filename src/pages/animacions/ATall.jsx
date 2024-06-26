import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";
import { GalleryWrapper } from "../../components/GalleryWrapper"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/animacions/tallers/Principal.jpg"
import img2 from "/src/img/animacions/tallers/1.jpg"
import img3 from "/src/img/animacions/tallers/2.jpg"
import img4 from "/src/img/animacions/tallers/3.jpg"
import img5 from "/src/img/animacions/tallers/4.jpg"

import { Helmet } from "react-helmet";




export function ATall() {
    return (
        <>
            <Helmet>
                <title>Tallers</title>
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Tallers"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Desperta la teua creativitat i aprén noves
                    habilitats amb els tallers de Xúquer Animació! T’oferim una
                    àmplia varietat de tallers dissenyats per a totes les edats i
                    interessos. Des de tallers de manualitats i art fns a tallers de
                    cuina i música, tenim alguna cosa per a cada gust i preferència
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Als nostres tallers et conduirem
                    per un procés d'aprenentatge perquè pugues traure el màxim
                    proft de l'experiència. Si desitges aprendre una nova tècnica
                    artística, millorar les teues habilitats culinàries o simplement
                    passar un bon moment creant alguna cosa amb les teues
                    pròpies mans, els nostres tallers són l'opció perfecta per a tu.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    A més, els nostres tallers són una excel·lent manera de socialitzar i conèixer gent nova que comparteix els
                    teus mateixos interessos. Participant en les nostres activitats, tindràs l'oportunitat de connectar amb persones afins i
                    compartir experiències en un ambient relaxat i amigable.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    ¡Contacta'ns hui mateix per a obtindre més informació i reserva el teu lloc en els nostres emocionants tallers!
                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <FooterComponent />
        </>
    )
}