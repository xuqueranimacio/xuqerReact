import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/extraescolars/patinatge/Principal.jpg"
import img2 from "/src/img/extraescolars/patinatge/1.jpg"
import img3 from "/src/img/extraescolars/patinatge/2.jpg"
import img4 from "/src/img/extraescolars/patinatge/3.jpg"
import img5 from "/src/img/extraescolars/patinatge/4.jpg"
import img6 from "/src/img/extraescolars/patinatge/5.jpg"
import img7 from "/src/img/extraescolars/patinatge/6.jpg"
import img8 from "/src/img/extraescolars/patinatge/7.jpg"
import { FooterComponent } from "../../components/FooterComponent";

const imageUrls = [
    img2, img3, img4, img7, img8
];



export function EPati() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Patinatge"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img5}>
                    És l'activitat perfecta per a que el xiquet/a aprenga a desenvolupar tècniques per a aprendre
                    o perfeccionar slalom, girs i frenades del patinatge, mitjançant dinàmiques i jocs.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img6}>
                    Una activitat que combina la diversió i la pràctica d'esport.
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