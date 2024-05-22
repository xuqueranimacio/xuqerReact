import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";
import { GalleryWrapper } from "../../components/GalleryWrapper";
import { Helmet } from "react-helmet";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/extraescolars/imaginart/Principal.png"
import img2 from "/src/img/extraescolars/imaginart/1.png"
import img3 from "/src/img/extraescolars/imaginart/2.png"
import img4 from "/src/img/extraescolars/imaginart/3.png"
import img5 from "/src/img/extraescolars/imaginart/4.png"


const imageUrls = [
    img3, img4, img5
];


export function EImag() {
    return (
        <>
            <Helmet>
                <title>Imaginart</title>
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Imaginart"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    El xiquet/a desenvoluparà la seua creativitat i imaginació de mil maneres, des de manualitats fins a treballs de tècniques de fang.
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