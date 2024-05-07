import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/extraescolars/diverciencia/Principal.png"
import img2 from "/src/img/extraescolars/diverciencia/1.png"
import img3 from "/src/img/extraescolars/diverciencia/2.png"
import img4 from "/src/img/extraescolars/diverciencia/3.png"
import img5 from "/src/img/extraescolars/diverciencia/4.png"
import img6 from "/src/img/extraescolars/diverciencia/5.png"
import img7 from "/src/img/extraescolars/diverciencia/6.png"
import { FooterComponent } from "../../components/FooterComponent";

export const imageUrls = [
    img1, img2, img3, img4, img5, img6, img7
];



export function EDiver() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Diverciència"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Es l'activitat idònia per a que els xiquets/es s'apropen a diferents àrees de la ciència i la física a
                    través d'experiments i jocs científics en els quals aprendran a descobrir l'entorn que els envolta.
                </InfoSectionCardRight>
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