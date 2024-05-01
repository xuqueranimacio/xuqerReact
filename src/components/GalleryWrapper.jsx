export function GalleryWrapper(props){
    return(
        <>
                    <section class="secondsection">
            <div class="container">
                <h2 class="section-title">Galeria</h2>
                <div class="mySwiper" data-aos="fade-left" data-aos-duration="1500">
                    <div class="swiper">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}