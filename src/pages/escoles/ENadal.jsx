import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"
import { FooterComponent } from "../../components/FooterComponent"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import imgPrincipal from "/src/img/escoles de vacances/nadal/Principal.jpg";
import img1 from "/src/img/escoles de vacances/nadal/1.jpg";
import img2 from "/src/img/escoles de vacances/nadal/2.jpg";
import img3 from "/src/img/escoles de vacances/nadal/3.jpg";
import img4 from "/src/img/escoles de vacances/nadal/4.jpg";
import img5 from "/src/img/escoles de vacances/nadal/5.jpg";
import img6 from "/src/img/escoles de vacances/nadal/6.jpg";
import img7 from "/src/img/escoles de vacances/nadal/7.jpg";
import img8 from "/src/img/escoles de vacances/nadal/8.jpg";
import img9 from "/src/img/escoles de vacances/nadal/9.jpg";

const imageUrls = [
    img5,
    img6,
    img7,
    img8,
    img9,
];



export function ENadal() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={imgPrincipal}
                title="Escola de Nadal"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img1}>
                    Celebra la màgia del Nadal amb Xúquer Animació!
                    Estàs buscant la manera perfecta que els teus fills gaudisquen de la temporada nadalenca?
                    No busques més! En Xúquer Animació, oferim una escola de Nadal plena de diversió, creativitat i esperit festiu.

                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img2}>
                    La nostra escola de Nadal està dissenyada per a xiquets i xiquetes de totes les edats,
                    oferint una experiència única on poden submergir-se en l'encant de la temporada.
                    Amb activitats temàtiques, manualitats nadalenques, jocs divertits i molt més,
                    cada dia serà una aventura màgica que recordaran per sempre.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img3}>
                    En Xúquer Animació, treballem per crear records especials que perduren tota la vida.
                    El nostre equip de professionals dedicats està compromés a proporcionar un ambient segur
                    i acollidor on els teus fills puguen explorar la seua creativitat, fer nous amics i sentir la màgia de Nadal.

                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img4}>
                    No et perdes l'oportunitat que els teus fills i filles formen part d'aquesta experiència nadalenca única amb Xúquer Animació!
                    Viu la màgia de Nadal amb Xúquer Animació!
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