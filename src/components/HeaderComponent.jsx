import logo from '../img/logo/logo-xuquer-animacio-vectors_page-0001.png'
import burger from '../img/MenuHambuger.svg'
import { AsideList } from './AsideList';
import { Link } from "react-router-dom";


export function HeaderComponent(){
    return (
        <>

        <AsideList />

        <div className="container" id="myHeader">
            <header className="header-wrapper">
                <div className="header">
                    <div className="title">
                            <Link to="/"><img
                                src={logo} alt="" />
                            </Link>
                    </div>
                    <div className="list">
                        <div className="nav-element">
                            <Link to="/nosaltres">
                                    <span>Nosaltres</span>
                                    <span className="rotate"></span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="separation">
                                    <Link href="" className="info-title">Qui Som</Link>
                                </div>
                                <div className="separation">
                                    <Link href="nosaltres/metodologia.html" className="info-title">Metodologia</Link>
                                </div>
                                <div className="separation">
                                    <Link href="" className="info-title">Valors</Link>
                                </div>
                                <div className="separation">
                                    <Link href="" className="info-title">Equip</Link>
                                </div>
                                <div className="separation">
                                    <Link href="" className="info-title">Treballa amb Nosaltres</Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-element">
                            <Link to="/campaments">
                                    Campaments
                            </Link>
                            <div className="dropdown-menu">
                                <div className="separation">
                                    <Link to="/campaments/estiu" className="info-title">Estiu</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/campaments/nadal" className="info-title">Nadal</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/campaments/pasqua" className="info-title">Pasqua</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/campaments/adults" className="info-title">Adults</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/campaments/multiaventura" className="info-title">Multiaventura</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/campaments/esportius" className="info-title">Esportius</Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-element">
                            <Link to="/escoles-de-vacances">
                                <span>Escoles de Vacances</span>
                                <span className="rotate"></span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="separation">
                                    <Link to="/escoles-de-vacances/estiu" className="info-title">Estiu</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/escoles-de-vacances/nadal" className="info-title">Nadal</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/escoles-de-vacances/pasqua" className="info-title">Pasqua</Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-element">
                            <Link to="/animacions">
                                <span>Animacions</span>
                                <span className="rotate"></span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="separation">
                                    <a href="animacions/aniversaris.html" className="info-title">Aniversaris</a>
                                </div>
                                <div className="separation">
                                    <a href="animacions/comunions.html" className="info-title">Comunions</a>
                                </div>
                                <div className="separation">
                                    <a href="animacions/tallers.html" className="info-title">Tallers</a>
                                </div>
                                <div className="separation">
                                    <a href="animacions/scape-room.html" className="info-title">Scape Room</a>
                                </div>
                                <div className="separation">
                                    <a href="animacions/jocs-populars.html" className="info-title">Jocs Populars</a>
                                </div>
                                <div className="separation">
                                    <a href="animacions/gimcanes.html" className="info-title">Gimcanes</a>
                                </div>
                                <div className="separation">
                                    <a href="animacions/animacions.html" className="info-title">Més...</a>
                                </div>
                            </div>
                        </div>

                        <div className="nav-element">
                            <Link to="/extraescolars">
                                <span>Extraescolars</span>
                                <span className="rotate"></span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="separation">
                                    <a href="" className="info-title">LegoBlocks</a>
                                </div>
                                <div className="separation">
                                    <a href="" className="info-title">Diverciencia</a>
                                </div>
                                <div className="separation">
                                    <a href="" className="info-title">Minixef</a>
                                </div>
                                <div className="separation">
                                    <a href="" className="info-title">Imaginart</a>
                                </div>
                                <div className="separation">
                                    <a href="" className="info-title">Balls Urbans</a>
                                </div>
                                <div className="separation">
                                    <a href="" className="info-title">Patinatge</a>
                                </div>
                                <div className="separation">
                                    <a href="" className="info-title">I moltes més...</a>
                                </div>
                            </div>
                        </div>

                        <div className="nav-element">
                            <a href="contacte.html">
                                <span>Contacte</span>
                            </a>
                        </div>
                    </div>
                    <div className="menuBurger">
                        <img src={burger} alt="" />
                    </div>
                </div>
            </header>
        </div>

    </>
    )
    
}