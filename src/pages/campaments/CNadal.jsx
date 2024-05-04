import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/campaments/nadal/Principal.jpg"
import img2 from "/src/img/campaments/nadal/1.jpg"
import img3 from "/src/img/campaments/nadal/2.jpg"
import img4 from "/src/img/campaments/nadal/3.jpg"
import img5 from "/src/img/campaments/nadal/4.jpg"
import img6 from "/src/img/campaments/nadal/5.jpg"
import img7 from "/src/img/campaments/nadal/3.jpg"
import img8 from "/src/img/campaments/nadal/4.jpg"
import img9 from "/src/img/campaments/nadal/1.jpg"
import img10 from "/src/img/campaments/nadal/2.jpg"
import { FooterComponent } from "../../components/FooterComponent";

export const imageUrls = [
    img6,
    img7,
    img8,
    img9,
    img10
];



export function CNadal() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Campament de Nadal"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Al nostre campament de Nadal creem una experiència plena d'alegria i diversió per als participants.
                    Durant aquesta temporada festiva, oferim una varietat d'activitats temàtiques que inclouen manualitats
                    nadalenques, jocs interactius, cant de nadales i l'oportunitat de participar en la creació de decoracions festives.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    A més de les activitats lúdiques, fomentem valors com la generositat,
                    l'amistat, les tradicions, les celebracions i la solidaritat, mitjançant
                    dinàmiques de cooperació i treball en equip.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    Creem un ambient càlid i acollidor, ja que aquest campament permet als xiquets submergir-se en la
                    màgia de Nadal, creant records duradors i enfortint la connexió amb els seus companys.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    En resum, el nostre campament de Nadal ofereix una experiència festiva que combina la diversió,
                    la creativitat i la promoció de valors positius.
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
            <FooterComponent />
        </>
    )
}