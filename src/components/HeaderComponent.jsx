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
                                    <Link to="/nosaltres/qui-som" className="info-title">Qui Som</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/nosaltres/metodologia" className="info-title">Metodologia</Link>
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
                                    <Link to="/animacions/aniversaris" className="info-title">Aniversaris</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/animacions/halloween" className="info-title">Halloween</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/animacions/tallers" className="info-title">Tallers</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/animacions/scape-room" className="info-title">Scape Room</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/animacions/jocs-populars" className="info-title">Jocs Populars</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/animacions/gimcanes" className="info-title">Gimcanes</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/animacions" className="info-title">Més...</Link>
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
                                    <Link to="/extraescolars/legoblocks" className="info-title">LegoBlocks</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/extraescolars/diverciencia" className="info-title">Diverciència</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/extraescolars/minixef" className="info-title">Minixef</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/extraescolars/imaginart" className="info-title">Imaginart</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/extraescolars/patinatge" className="info-title">Patinatge</Link>
                                </div>
                                <div className="separation">
                                    <Link to="/extraescolars" className="info-title">I moltes més...</Link>
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