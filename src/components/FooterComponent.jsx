import footerLogo from '../img/logo/logo-xuquer-animacio-vectors_page-0001.png'
import { Link } from 'react-router-dom'

export function FooterComponent(){
    return (
        <>
        
        <footer className="footer-wrapper">
            <div className="footer-info container">
                <div className="footer-title">
                    <img src={footerLogo} alt="" />
                </div>
                <div className="footer-section">
                    <h2>Contacte</h2>
                    <a>+34 621 319 967</a>
                    <a>
                        xuqueranimacio@gmail.com
                    </a>
                    <a>Albalat de la Ribera, València</a>
                </div>
                <div className="footer-section">
                    <h2>Qui Som</h2>
                    <a href="">Empresa d’animació sociocultural</a>
                    <a href="">Tot tipus d’events</a>
                </div>
                <div className="footer-section">
                    <h2>Activitats</h2>
                    <Link to="/campaments">Campaments</Link>
                    <Link to="/escoles-de-vacances">Escoles de Vacances</Link>
                    <Link to="/extraescolars">Extraescolars</Link>
                    <Link to="/animacions">Animacions</Link>
                </div>
                <div className="footer-section">
                    <h2>Xarxes socials</h2>
                    <a href="https://www.instagram.com/xuqueranimacio/" target="_blank">Instagram</a>
                    <a>Facebook</a>
                </div>
            </div>
        </footer>
        
        </>
    )
}