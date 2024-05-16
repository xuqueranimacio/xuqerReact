import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";
import { GalleryWrapper } from "../../components/GalleryWrapper";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/animacions/musical/Principal.jpg"
import img2 from "/src/img/animacions/musical/1.jpg"
import img3 from "/src/img/animacions/musical/2.jpg"
import img4 from "/src/img/animacions/musical/3.jpg"
import img5 from "/src/img/animacions/musical/4.jpg"
import img6 from '/src/img/animacions/musical/5.jpg'
import img7 from '/src/img/animacions/musical/7.jpg'
import img8 from '/src/img/animacions/musical/8.jpg'
import img9 from '/src/img/animacions/musical/9.jpg'
import img10 from '/src/img/animacions/musical/10.jpg'
import img11 from '/src/img/animacions/musical/12.jpg'

export const imageUrls = [
    img6, img7, img8, img9, img10, img11
];



export function AMusic() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Musicals"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    El musical realitzat per Xúquer
                    Animació no sols és una experiència d'entreteniment, sinó
                    també un vehicle per a l'estímul de l'art i la cultura en la qual els
                    xiquets i xiquetes es converteixen en autèntics protagonistes i
                    directors d'un musical de pel·lícula.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Els nostres musicals es fonamenten
                    en valors molt diversos, donant oportunitat per al
                    desenvolupament i la diversió del nostres talents locals més
                    menuts.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    Mitjançant les nostres produccions, portem a escena històries captivadores que treballen
                    emocions profundes, connectant amb el públic d'una manera única i significativa.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    En resum, els musicals de Xúquer Animació són molt més que simples espectacles; són moments
                    de creativitat i diversió, en la que els nostres xiquets, xiquetes i familiars gaudeixen d’un dia inoblidable.
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