import { HeaderComponent } from "./components/HeaderComponent"
import { FooterComponent } from "./components/FooterComponent";
import { Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import capaments from './img/swiper/campaments.jpg'
import equip from './img/equipo.jpg'
import escola from './img/_MG_6815.jpg'
import extraescolars from './img/extraescolars/legoblocks/1.jpg'

import Aos from "aos";

import { useEffect } from "react";

import pic1 from './img/swiper/campaments.jpg'
import { Link } from "react-router-dom";

export function Index(){

    useEffect(() =>{
        Aos.init();
    }, [])

    return (
        <>
    
            <HeaderComponent />
            <div className="container">
                <div className="img-title">
                <Swiper
                    modules={[Autoplay, Navigation]}
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
                    <SwiperSlide>
                        <div className="absolute-title">
                            <Link to="/campaments">
                                <h1>Campaments</h1>
                            </Link>
                            <p>Viure és l'actitud d'omplir la vida</p>
                        </div>
                        <img className="swiper-img" src={pic1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="absolute-title">
                            <Link to="/animacions">
                                <h1>Animacions</h1>
                            </Link>
                            <p>Als simples moments tenim les majors alegries</p>
                        </div>
                        <img className="swiper-img" src={equip} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="absolute-title">
                                <Link to="/escoles-de-vacances">
                                    <h1>Escoles de Vacances</h1>
                                </Link>
                                <p>Sols els que creuen en la màgia estan destinats a trobar-la</p>
                        </div>
                        <img className="swiper-img" src={escola} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="absolute-title">
                            <Link to="/extraescolars">
                                <h1>Extraescolars</h1>
                            </Link>
                            <p>L'art d'ensenyar és l'art d'ajudar a descobrir</p>
                        </div>
                        <img className="swiper-img" src={extraescolars} alt=""/>
                    </SwiperSlide>
                </Swiper>
                </div>
                
            </div>
            <section className="activities">
            <div className="container">
                <h2 className="section-title">Les Nostres Activitats</h2>
                <div className="activitiesgrid">
                    <Link to="/campaments" data-aos="fade-right" data-aos-duration="500" className="card-img-grid" id="firstGrid">
                        <img src={capaments} alt="" />
                    </Link>
                    <Link to="/animacions" data-aos="fade-left" data-aos-duration="2000" className="card-img-grid" id="secGrid">
                        <img src={equip} alt="" />
                    </Link>
                    <Link to="/escoles-de-vacances" data-aos="fade-left" data-aos-duration="1000" className="card-img-grid" id="thirdGrid">
                        <img src={escola} alt="" />
                    </Link>
                    <Link to="/extraescolars" data-aos="fade-right" data-aos-duration="800" className="card-img-grid" id="fourthGrid">
                        <img src={extraescolars} alt="" />
                    </Link>
                </div>
            </div>
        </section>

        <section id="aboutus">
            <div className="container">
                <div className="aboutus">
                    <div className="about-title" data-aos="fade-right" data-aos-duration="1500">
                        <h2 className="titleWrapper">
                            <span className="firstTitle">El nostre objectiu:</span>
                            <br /> 
                            <span className="secondTitle">Un Somriure</span>
                            <hr className="hrAboutUs"/>
                        </h2>
                        <p>
                            La nostra passió per l'animació és el motor que impulsa la nostra empresa. A Xúquer
                            Animació, creiem en la màgia de la infància i l'adolescència, i en la importància de crear moments
                            inoblidables per als més menuts. El nostre compromís amb la diversió i l'educació
                            ens ha convertit en referents en l'organizació de campaments, escoles de vacances i altres esdeveniments.</p>
                    </div>
                    <div className="about-img" id="aboutimg" data-aos="fade-left" data-aos-duration="3000">
                        <img src={equip} alt="" />
                    </div>
                </div>

            </div>

        </section>

        <FooterComponent></FooterComponent>


        </>
    )
}