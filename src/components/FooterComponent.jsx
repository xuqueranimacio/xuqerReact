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
                    <a href="mailto:xuqueranimacio@hotmail.com">Correu Electrònic</a>
                    <a>Albalat de la Ribera, València</a>
                </div>
                <div className="footer-section">
                    <h2>Qui Som</h2>
                    <a href="">Empresa d’animació sociocultural</a>
                    <a href="">Tot tipus d’events</a>
                </div>
                <div className="footer-section">
                    <h2>Activitats</h2>
                    <Link href="/campaments">Campaments</Link>
                    <Link href="/escoles-de-vacances">Escola de Vacances</Link>
                    <Link href="/extraescolars">Extrescolars</Link>
                    <Link href="/animacions">Animacions</Link>
                </div>
                <div className="footer-section">
                    <h2>Xarxes socials</h2>
                    <a href="https://www.instagram.com/xuqueranimacio/">Instagram</a>
                    <a>Facebook</a>
                </div>
            </div>
        </footer>
        
        </>
    )
}