import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapper, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"
import { FooterComponent } from "../../components/FooterComponent"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// IMGS
import img1 from "/src/img/escoles de vacances/pasqua/Principal.jpg";
import img2 from "/src/img/escoles de vacances/pasqua/1.jpg";
import img3 from "/src/img/escoles de vacances/pasqua/2.jpg";
import img4 from "/src/img/escoles de vacances/pasqua/3.jpg";
import img5 from "/src/img/escoles de vacances/pasqua/4.jpg";
import img6 from "/src/img/escoles de vacances/pasqua/5.jpg";
import img7 from "/src/img/escoles de vacances/pasqua/6.jpg";
import img8 from "/src/img/escoles de vacances/pasqua/7.jpg";
import img9 from "/src/img/escoles de vacances/pasqua/8.jpg";

const imageUrls = [
    img6,
    img7,
    img8,
    img9,
];



export function EPasqua() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Escola de Pasqua"
            />
            <InfoSectionWrapper>
                <InfoSectionCardRight imgURL={img2}>
                    Celebra la Pasqua amb Xúquer Animació!
                    Estàs buscant una manera emocionant perquè els teus fills gaudisquen de les vacances de Pasqua? 
                    No busques més! En Xúquer Animació, hem preparat una escola de Pasqua plena de diversió, creativitat i aventura.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img3}>
                    La nostra escola de Pasqua està dissenyada per a xiquets i xiquetes de totes les edats, oferint una 
                    experiència única on poden explorar, crear i gaudir dels encants de la temporada de primavera. Amb activitats temàtiques, 
                    manualitats pasqüeres, jocs divertits i molt més, cada dia serà una aventura emocionant que recordaran per sempre.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img4}>
                    A Xúquer Animació, proporcionem un entorn segur i enriquidor on els teus fills puguen créixer i divertir-se. Amb un equip de professionals dedicats, estem compromesos a fer de la seua experiència de Pasqua una memòria inoblidable.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img5}>
                    No deixes passar l'oportunitat que els teus fills formen part d'aquesta experiència única de Pasqua amb Xúquer Animació!
                    <br /><br />Celebra la Pasqua amb Xúquer Animació!
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