import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/campaments/adults/Principal-min.jpg"
import img2 from "/src/img/campaments/adults/1.jpg"
import img3 from "/src/img/campaments/adults/2.jpg"
import img4 from "/src/img/campaments/adults/3.jpg"
import img5 from "/src/img/campaments/adults/4.jpg"
import img6 from "/src/img/campaments/adults/5.jpg"
import img7 from "/src/img/campaments/adults/6.jpg"
import img8 from "/src/img/campaments/adults/7.jpg"
import img9 from "/src/img/campaments/adults/10.jpg"
import img10 from "/src/img/campaments/adults/11.jpg"

export const imageUrls = [
    img6,
    img7,
    img8,
    img9,
    img10
];

import { Helmet } from "react-helmet";




export function CAdults() {
    return (
        <>
            <Helmet>
                <title>Campament d'Adults</title>
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Campament d'Adults"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    El nostre <b>campament d’adults</b> és una experiència única en la qual hem volgut
                    que la persona adulta puga desconnectar de la seua rutina diària i les responsabilitats personals.
                    Aquest projecte s’ha dissenyat per a oferir <b>diversió, relaxació i oportunitats</b> de creixement personal en un entorn a l'aire lliure.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Busquem en cada participant la <b>diversió i el  desenvolupament personal</b>.
                    Són oportunitats excel·lents per a establir noves amistats i enfortir les relacions socials.
                    Activitats grupals i moments de convivència creen un ambient propici per a la interacció i la companyonia.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    Les activitats estan adaptades al <b>públic adult</b>, ja que s’ofereixen una varietat d'activitats recreatives, com senderisme, ioga,
                    tallers d'art, activitats aquàtiques, excursions i altres opcions que <b>fomenten el benestar i l'entreteniment</b>.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    Vos garantim la possibilitat de gaudir d’una <b>experiència positiva i sense preocupacions</b>,
                    combinant de forma equilibrada relaxació, diversió i connexió social en un entorn que permet <b>escapar de la rutina diària</b>.
                </InfoSectionCardLeft>
            </InfoSectionWrapper>
            <GalleryWrapper>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    autoplay={{
                        "delay": 5000,
                        "disableOnInteraction": false
                    }}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {imageUrls.map((url, index) => (
                        <SwiperSlide>
                            <img key={index} src={url} className="myimg"></img>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </GalleryWrapper>
        </>
    )
}