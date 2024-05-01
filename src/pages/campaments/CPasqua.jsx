import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/campaments/pasqua/Principal.jpg"
import img2 from "/src/img/campaments/pasqua/1.jpg"
import img3 from "/src/img/campaments/pasqua/2.jpg"
import img4 from "/src/img/campaments/pasqua/3.jpg"
import img5 from "/src/img/campaments/pasqua/4.jpg"
import { FooterComponent } from "../../components/FooterComponent";

export const imageUrls = [
    '/src/img/campaments/pasqua/5.jpg',
    '/src/img/campaments/pasqua/6.jpg',
    '/src/img/campaments/pasqua/7.jpg',
    '/src/img/campaments/pasqua/8.jpg',
    '/src/img/campaments/pasqua/9.jpg',
];



export function CPasqua() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Campament de Pasqua"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Al nostre campament de pasqua ens centrem a proporcionar als xiquets una experiència divertida i gratificant.
                    En aquest ens enfoquem en una varietat d'activitats i jocs creatius que principalment busquen transmetre
                    l'alegria i l’emoció característiques d’aquesta temporada vacacional.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Les activitats inclouen manualitats temàtiques, jocs a l'aire lliure, cerca d'ous de Pasqua i
                    tallers que fomenten la creativitat i l'expressió individual. Mitjançant aquestes es promouen
                    valors com l'amistat, la cooperació i el respecte, creant un ambient inclusiu en el qual els
                    xiquets i xiquetes poden gaudir, aprendre i desenvolupar habilitats socials.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    És un campament més reduït que el d’estiu, així que també presenta certs avantatges,
                    ja que et permet conéixer més a cadascun dels i les participants.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    En resum, el nostre campament de pasqua ofereix una combinació única de diversió,
                    creativitat i ensenyaments valuosos perquè els xiquets puguen viure unes vacances inoblidables.
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