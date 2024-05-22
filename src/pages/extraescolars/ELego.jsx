import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"

import { Helmet } from "react-helmet";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/extraescolars/legoblocks/Principal.webp"
import img2 from "/src/img/extraescolars/legoblocks/1.webp"
import img3 from "/src/img/extraescolars/legoblocks/2.webp"
import img4 from "/src/img/extraescolars/legoblocks/3.webp"
import img5 from "/src/img/extraescolars/legoblocks/4.webp"
import img6 from "/src/img/extraescolars/legoblocks/5.webp"
import img7 from "/src/img/extraescolars/legoblocks/6.webp"
import { FooterComponent } from "../../components/FooterComponent";

export const imageUrls = [
    img4, img5, img6, img7
];



export function ELego() {
    return (
        <>
            <Helmet>
                <title>LegoBlocks</title>
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="LegoBlocks"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    En aquesta activitat el xiquet/a treballarà la consciència espacial, l'habilitat de raonar, 
                    la lògica, la creativitat i la concentració.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    A banda de divertir-se i treballar alguns conceptes mecànics, 
                    mentre realitza construccions i altres muntatges.
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