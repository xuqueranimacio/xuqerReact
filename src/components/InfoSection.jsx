import { Link } from "react-router-dom";

export function InfoSectionWrapper(props){
    return(
        <>

            <section id="secondsection">
                <div className="container">
                    <h2 className="section-title">Què fem</h2>
                    
                    {props.children}

                    <div className="info-section">
                        <div className="about-title">
                            <h3 className="contact-title">Vols parlar amb nosaltres?</h3>
                        </div>
                        <div className="about-title">
                            <Link to="/contacte">
                                <button className="contact-activitats">Contacta'ns</button>
                            </Link>
                        </div>
                    </div>
                            

                </div>

            </section>
        
        </>
    )
}

export function InfoSectionCardRight(props){
    return(
        <>
        
            <div className="info-section">
                <div className="about-title" data-aos="fade-right" data-aos-duration="1500">
                    <p>
                        {props.children}
                    </p>

                </div>
                <div className="myimage" data-aos="fade-left" data-aos-duration="2000">
                    <img src={props.imgURL} className="myimgR" alt="" />
                </div>
            </div>

        </>
    )
}

export function InfoSectionCardLeft(props){
    return(
        <>
        
            <div className="info-section">
                <div className="myimage" data-aos="fade-right" data-aos-duration="2000">
                    <img src={props.imgURL} className="myimgR" alt="" />
                </div>
                <div className="about-title" data-aos="fade-left" data-aos-duration="1500">
                    <p>
                        {props.children}
                    </p>

                </div>
            </div>

        </>
    )
}

export function InfoSectionWrapperCustom(props){
    return(
        <>

            <section id="secondsection">
                <div className="container">
                    <h2 className="section-title">{props.title}</h2>
                    
                    {props.children}

                    <div className="info-section">
                        <div className="about-title">
                            <h3 className="contact-title">Vols parlar amb nosaltres?</h3>
                        </div>
                        <div className="about-title">
                            <Link to="/contacte">
                                <button className="contact-activitats">Contacta'ns</button>
                            </Link>
                        </div>
                    </div>
                            

                </div>

            </section>
        
        </>
    )
}