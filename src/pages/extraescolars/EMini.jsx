import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Helmet } from "react-helmet";


// IMGS
import img1 from "/src/img/extraescolars/minixef/Principal.png"
import img2 from "/src/img/extraescolars/minixef/1.png"
import img3 from "/src/img/extraescolars/minixef/2.png"
import img4 from "/src/img/extraescolars/minixef/3.png"
import img5 from "/src/img/extraescolars/minixef/4.png"
import img6 from "/src/img/extraescolars/minixef/5.png"
import { FooterComponent } from "../../components/FooterComponent";

export const imageUrls = [
    img4, img5, img6
];



export function EMini() {
    return (
        <>
            <Helmet>
                <title>Minixef | Xúquer Animació</title>
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Minixef"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Dirigida als més valents i valentes, per als quals la cuina pot acabar sent la seua passió.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    En aquesta activitat aprendran a realitzar receptes bàsiques de cuina,
                    i també s'educaran en hàbits saludables d'alimentació i cuina.
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