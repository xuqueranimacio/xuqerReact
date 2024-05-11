import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";
import { GalleryWrapper } from "../../components/GalleryWrapper"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/animacions/gimcanes/Principal.jpg"
import img2 from "/src/img/animacions/gimcanes/1.jpg"
import img3 from "/src/img/animacions/gimcanes/2.jpg"
import img4 from "/src/img/animacions/gimcanes/3.jpg"
import img5 from "/src/img/animacions/gimcanes/4.jpg"

export const imageUrls = [
    '/src/img/animacions/gimcanes/5.jpg',
    '/src/img/animacions/gimcanes/6.jpg',
    '/src/img/animacions/gimcanes/7.jpg',
    '/src/img/animacions/gimcanes/8.jpg',
    '/src/img/animacions/gimcanes/9.jpg',
];



export function AGim() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Gimcanes"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Endinsa't en una aventura plena de
                    diversió i emoció amb les gimcanes de Xúquer Animació!
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Oferim una àmplia gamma
                    d’emocionants gimcanes dissenyades per desafar les teues
                    habilitats, promoure el treball en equip i brindar-te moments
                    inoblidables. Des de competicions de curses d'obstacles fns a
                    emocionants conquestes del tresor.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    Organitzem gimcanes per a una varietat
                    d'esdeveniments, les quals són una excel·lent manera de promoure la
                    cooperació, el lideratge i la resolució de problemes entre els participants.
                    Treballant junts per superar desafiaments i completar tasques, els equips
                    reforcen els seus llaços i creen records inoblidables que perduraran molt de
                    temps després que acabe l'aventura.

                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    Contacta'ns avui mateix per a obtenir més informació i reserva el teu dia de diversió garantida!
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