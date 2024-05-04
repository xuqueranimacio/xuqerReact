import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { FooterComponent } from "../../components/FooterComponent";
import { GalleryWrapper } from "../../components/GalleryWrapper"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/animacions/halloween/principal.jpg"
import img2 from "/src/img/animacions/halloween/1.jpg"
import img3 from "/src/img/animacions/halloween/2.jpg"
import img4 from "/src/img/animacions/halloween/3.jpg"
import img5 from "/src/img/animacions/halloween/4.jpg"

export const imageUrls = [
    '/src/img/animacions/halloween/5.jpg',
    '/src/img/animacions/halloween/6.jpg',
    '/src/img/animacions/halloween/7.jpg',
    '/src/img/animacions/halloween/8.jpg',
    '/src/img/animacions/halloween/9.jpg',
    '/src/img/animacions/halloween/10.jpg',
    '/src/img/animacions/halloween/11.jpg',
];



export function AHall() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Halloween"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    ¡Prepara't per viure  una experiència terroríficament emocionant amb els nostres passatges del terror!
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    Submergeix-te en un món de misteri i suspens on cada racó amaga un nou sotrac. Els nostres passatges del
                    terror estan dissenyats per a desafiar les teues pors més profundes i mantenir-te en vilo a cada pas
                    que dones. Amb decorats detallats, efectes especials impressionants i actors experts en l'art de l'espant,
                    et garantim una experiència immersiva que et farà sentir com si estigueres dins d'una pel·lícula de terror.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    Ja siga que vingues en grup amb amics valents o desafies els teus propis límits en solitari, els nostres passatges
                    del terror et faran sentir l'adrenalina córrer per les teues venes i els crits escapar de la teua gola.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    No perdes l'oportunitat de viure una nit d'emocions intenses i diversió esgarrifosa amb Xúquer Animació. Prepara't
                    per a una experiència que et deixarà sense alè!
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