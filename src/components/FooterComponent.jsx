import footerLogo from '../img/logo/logo-xuquer-animacio-vectors_page-0001.png'

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
                    <a>📲 +34 621 319 967</a>
                    <a href="mailto:xuqueranimacio@hotmail.com">📩 Correu Electrónic</a>
                    <a>📍 Albalat de la Ribera, València</a>
                </div>
                <div className="footer-section">
                    <h2>Qui Som</h2>
                    <a href="">🎈Empresa d’animació sociocultural</a>
                    <a href="">🎉Tot tipus d’events</a>
                </div>
                <div className="footer-section">
                    <h2>Activitats</h2>
                    <a href="activitats/activitats.html.html#campaments">Campaments</a>
                    <a href="activitats/activitats.html.html#escola-de-vacances">Escola de Vacances</a>
                    <a href="activitats/activitats.html.html#extraescolars">Extrescolars</a>
                    <a href="activitats/activitats.html.html#aniversaris">Aniversaris</a>
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