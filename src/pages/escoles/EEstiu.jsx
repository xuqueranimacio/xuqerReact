import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"
import { Helmet } from "react-helmet";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/escoles de vacances/estiu/Principal.jpg";
import img2 from "/src/img/escoles de vacances/estiu/1.jpg";
import img3 from "/src/img/escoles de vacances/estiu/2.jpg";
import img4 from "/src/img/escoles de vacances/estiu/3.jpg";
import img5 from "/src/img/escoles de vacances/estiu/4.jpg";
import img6 from "/src/img/escoles de vacances/estiu/5.jpg";
import img7 from "/src/img/escoles de vacances/estiu/6.jpg";
import img8 from "/src/img/escoles de vacances/estiu/7.jpg";
import img9 from "/src/img/escoles de vacances/estiu/10.jpg";
import img10 from "/src/img/escoles de vacances/estiu/11.jpg";
import { FooterComponent } from "../../components/FooterComponent";

const imageUrls = [
    img6,
    img7,
    img8,
    img9,
    img10
];



export function EEstiu() {
    return (
        <>
            <Helmet>
                <title>Escola d'Estiu</title>
            </Helmet>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Escola d'Estiu"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Descobreix la diversió de l'estiu amb Xúquer Animació! <br />
                    Estàs buscant la manera perfecta que els teus fills passen l'estiu? No busques més! En Xúquer Animació, oferim una experiència
                    d'estiu inoblidable plena de diversió, aprenentatge i aventures.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    La nostra escola d'estiu està dissenyada per a xiquets i xiquetes de totes les edats, on cada dia és una nova aventura.
                    Amb el nostre equip de professionals altament qualificats i dedicats, els teus fills estaran immersos en un entorn segur
                    i estimulant on poden aprendre, explorar i crear records que duraran tota la vida.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    En Xúquer Animació, ens apassiona inspirar la creativitat i l'aprenentatge a través del joc i la diversió. Des d'activitats
                    artístiques i manualitats fins a jocs a l'aire lliure i excursions emocionants, cada dia està ple de noves oportunitats per
                    descobrir, experimentar i créixer.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    No perdes l'oportunitat que els teus fills formen part d'aquesta increïble aventura d'estiu amb Xúquer Animació!
                    <br /><br />L'estiu està ple de possibilitats amb Xúquer Animació!
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