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

export const imageUrls = [
    '/src/img/animacions/tallers/5.jpg',
    '/src/img/animacions/tallers/6.jpg',
    '/src/img/animacions/tallers/7.jpg',
    '/src/img/animacions/tallers/8.jpg',
    '/src/img/animacions/tallers/9.jpg',
];



export function ATall() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Tallers"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Els nostres <b>campaments de multiaventura</b> són experiències emocionants
                    i variades que combinen diferents activitats a l'aire lliure per a
                    oferir als i les participants una aventura integral. Aquests campaments
                    se centren a proporcionar als xiquets i xiquetes una àmplia gamma d'experiències
                    esportives i educatives. Algunes de les característiques a destacar són:
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    <b>Entorn Natural</b>: les activitats es porten a terme en entorns naturals, com boscos, muntanyes
                    o pinades. Aquesta connexió amb la naturalesa no sols proporciona un component estètic sinó
                    que també promou el respecte pel medi ambient i l'apreciació de la biodiversitat.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    <b>Aventura i Emoció</b>: la diversitat d'activitats i la naturalesa desafiadora d'algunes
                    d'elles proporcionen una dosi d'emoció i adrenalina. Això no sols fa que l'experiència
                    siga divertida, sinó que també ajuda a superar pors i a construir una mentalitat
                    positiva davant els desafiaments.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    <b>Seguretat i Supervisió</b>: malgrat l'emoció i l'aventura, la seguretat dels participants
                    és una prioritat. Els campaments multiaventura compten amb personal capacitat i mesures
                    de seguretat per a garantir que totes les activitats es realitzen de manera segura.
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